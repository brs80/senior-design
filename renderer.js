// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const
ipc      = require('electron').ipcRenderer,

syncBtn  = document.querySelector('#syncBtn'),
asyncBtn = document.querySelector('#asyncBtn');

let replyDiv = document.querySelector('#reply');

syncBtn.addEventListener('click', () => {
 let
 reply = ipc.sendSync('synMessage','A sync message to main');
 replyDiv.innerHTML = reply;
});

asyncBtn.addEventListener('click', () => {
 ipc.send('aSynMessage','A async message to main')
});

ipc.on('asynReply', (event, args) => {
 replyDiv.innerHTML = args;
});