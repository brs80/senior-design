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
 if(replyaSync === 'test') {
 	replyaSync = readFile()
 }
 ipc.send('aSynMessage',replyaSync)
});

ipc.on('asynReply', (event, args) => {
	replyDiv.innerHTML = args;
});

function readFile() {
	var fs = require('fs');
 
	var contents = fs.readFileSync('test.json', 'utf8');
	return JSON.parse(contents)
	console.log(contents);
}