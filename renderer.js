// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const
ipc      = require('electron').ipcRenderer,

syncBtn  = document.querySelector('#syncBtn'),
asyncBtn = document.querySelector('#asyncBtn');
const fs = require('fs')
let replyDiv = document.querySelector('#reply');


asyncBtn.addEventListener('input', () => {
 let replyaSync = document.getElementById('asyncBtn').value;

 if(replyaSync === 'class' || replyaSync === 'Class')
 {
 	replyaSync = readFile('classcpp.txt')
 }
 else if(replyaSync === 'int' || replyaSync === 'Int' || replyaSync === 'Integer')
 {
 	replyaSync = readFile('intcpp.txt')
 }
 else if(replyaSync === 'str' || replyaSync === 'string' || replyaSync === 'String' || replyaSync === 'Str')
 {
 	replyaSync = readFile('stringcpp.txt')
 }
 else if(replyaSync === 'obj' || replyaSync === 'object')
 {
 	replyaSync = readFile('objcpp.txt')
 }


 ipc.send('aSynMessage',replyaSync)
});

ipc.on('asynReply', (event, args) => {
	replyDiv.innerHTML = args;
});

function readFile(fileName) {
	var fs = require('fs');
	var contents = fs.readFileSync(fileName, 'utf8');
	var temp = contents.split('\n')

	for(var i in temp) {
		//temp[i] = temp[i] + "<br>"
		var noCommas = String(temp[i])
		var newchar = ' '
		noCommas = temp[i].split(',').join(newchar);
		console.log(temp[i]);
	}
	var finalMessage = String(temp)
	
	return contents
}