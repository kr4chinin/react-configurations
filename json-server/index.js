const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// for artificial delay
server.use(async (_req, _res, next) => {
	await new Promise(res => {
		setTimeout(res, 800);
	});

	next();
});

server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		const db = JSON.parse(
			fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
		);
		const { users = [] } = db;

		const userFromDB = users.find(
			user => user.username === username && user.password === password,
		);

		if (userFromDB) {
			return res.json(userFromDB);
		}

		return res.status(403).json({ message: 'User was not found' });
	} catch (e) {
		console.error('Failed to login: ', e);

		return res.status(500).json({ message: e.message });
	}
});

// check authorization
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'Unauthorized' });
	}

	next();
});

server.use(router);

const PORT = 8000;

// start server
server.listen(PORT, () => {
	console.log(`Server is running on ${PORT} port...`);
});
