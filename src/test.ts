export function test(arg: number): string {
	console.log('test', arg);
  
	return arg.toString();
}

document.body.innerHTML = `<div>Hello World!</div>`