// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const
ipc      = require('electron').ipcRenderer,
ipc1     = require('electron').ipcRenderer

const fs = require('fs');
let replyDiv = document.querySelector('#reply');

asyncBtnCpp = document.querySelector('#asyncBtnCpp')
if(asyncBtnCpp) { 
    asyncBtnCpp.addEventListener('input', () => {
    let replyaSync = document.getElementById('asyncBtnCpp').value;

    if(replyaSync === 'array' || replyaSync === 'Array')
     {
        replyaSync = readFile('data/arraycpp.txt')
     }
	else if(replyaSync === 'class' || replyaSync === 'Class')
	 {
	 	replyaSync = readFile('data/classcpp.txt')
	 }
	else if(replyaSync === 'int' || replyaSync === 'Int' || replyaSync === 'Integer')
	 {
	 	replyaSync = readFile('data/intcpp.txt')
	 }
	else if(replyaSync === 'str' || replyaSync === 'string' || replyaSync === 'String' || replyaSync === 'Str')
	 {
	 	replyaSync = readFile('data/stringcpp.txt')
	 }
	else if(replyaSync === 'obj' || replyaSync === 'object')
	 {
	 	replyaSync = readFile('data/objcpp.txt')
	 }
    else if(replyaSync === 'data' || replyaSync === 'data types')
     {
        replyaSync = readFile('data/datatypescpp.txt')
     }
    else if(replyaSync === 'Data' || replyaSync === 'Data types')
     {
        replyaSync = readFile('data/datatypescpp.txt')
     }
    else if(replyaSync === 'fib' || replyaSync === 'Fib'
            || replyaSync === 'Fibonacci' || replyaSync === 'fibonacci')
     {
        replyaSync = readFile('data/fibcpp.txt')
     }
    else if(replyaSync === 'struct' || replyaSync === 'Struct')
     {
        replyaSync = readFile('data/structcpp.txt')
     }
    else if(replyaSync === 'vector' || replyaSync === 'Vector')
     {
        replyaSync = readFile('data/vectorcpp.txt')
     }
    else if(replyaSync === 'stack' || replyaSync === 'Stack')
     {
        replyaSync = readFile('data/stackcpp.txt')
     }
	 ipc.send('aSynMessage',replyaSync)
	});
}
ipc.on('asynReply', (event, args) => {
	replyDiv.innerHTML = args;
});

asyncBtnC = document.querySelector('#asyncBtnC')
if(asyncBtnC) { 
    asyncBtnC.addEventListener('input', () => {
    let replyaSync = document.getElementById('asyncBtnC').value;

     if(replyaSync === 'class' || replyaSync === 'Class')
     {
        replyaSync = readFile('data/classcpp.txt')
     }
     else if(replyaSync === 'int' || replyaSync === 'Int' || replyaSync === 'Integer')
     {
        replyaSync = readFile('data/intcpp.txt')
     }
     else if(replyaSync === 'str' || replyaSync === 'string' || replyaSync === 'String' || replyaSync === 'Str')
     {
        replyaSync = readFile('data/stringc.txt')
     }
     else if(replyaSync === 'obj' || replyaSync === 'object')
     {
        replyaSync = readFile('data/objcpp.txt')
     }
    else if(replyaSync === 'data' || replyaSync === 'data types')
     {
        replyaSync = readFile('data/datatypescpp.txt')
     }
    else if(replyaSync === 'Data' || replyaSync === 'Data types')
     {
        replyaSync = readFile('data/datatypescpp.txt')
     }
    else if(replyaSync === 'array' || replyaSync === 'Array')
     {
        replyaSync = readFile('data/arraycpp.txt')
     }
    else if(replyaSync === 'struct' || replyaSync === 'Struct')
     {
        replyaSync = readFile('data/structcpp.txt')
     }
    else if(replyaSync === 'vector' || replyaSync === 'Vector')
     {
        replyaSync = "no vectors in c"
     }
    else if(replyaSync === 'stack' || replyaSync === 'Stack')
     {
        replyaSync = readFile('data/stackc.txt')
     }
     ipc.send('aSynMessage',replyaSync)
    });
}

let replyDivJava = document.querySelector('#replyJava');
asyncBtnJava = document.querySelector('#asyncBtnJava');
if(asyncBtnJava) {
	
	asyncBtnJava.addEventListener('input', () => {
	 let replyaSyncJava = document.getElementById('asyncBtnJava').value;
	 if(replyaSyncJava === 'class' || replyaSyncJava === 'Class')
	 {
	 	replyaSyncJava = readFile('data/classjava.txt')
	 }
	 else if(replyaSyncJava === 'int' || replyaSyncJava === 'Int' || replyaSyncJava === 'Integer')
	 {
	 	replyaSyncJava = readFile('data/intjava.txt')
	 }
	 else if(replyaSyncJava === 'str' || replyaSyncJava === 'string' || replyaSyncJava === 'String' || replyaSyncJava === 'Str')
	 {
	 	replyaSyncJava = readFile('data/stringjava.txt')
	 }
	 else if(replyaSyncJava === 'obj' || replyaSyncJava === 'object')
	 {
	 	replyaSyncJava = readFile('data/objjava.txt')
	 }
     else if(replyaSyncJava === 'fib' || replyaSyncJava === 'Fibonacci'
                || replyaSyncJava === 'fibonacci' ||  replyaSyncJava === 'Fib')
     {
        replyaSyncJava = readFile('data/fibjava.txt')
     }
     else if(replyaSyncJava === 'data' || replyaSyncJava === 'data types')
     {
        replyaSyncJava = readFile('data/datatypesjava.txt')
     }
     else if(replyaSyncJava === 'Data' || replyaSyncJava === 'Data types')
     {
        replyaSyncJava = readFile('data/datatypesjava.txt')
     }
    else if(replyaSyncJava === 'array' || replyaSyncJava === 'Array')
     {
        replyaSyncJava = readFile('data/arrayjava.txt')
     }
	 ipc1.send('aSynMessageJava',replyaSyncJava)
	});
}

ipc1.on('asynReplyJava', (event, args) => {
	replyDivJava.innerHTML = args;
});

function readFile(fileName) {
	var fs = require('fs');
	var contents = fs.readFileSync(fileName, 'utf8');
	
	return contents
}