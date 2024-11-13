//Node Module System :
//core Modules ==> os / fs / events / http

//console.log() ==> //global or window.console.log( ) or globalThis.console.log()
//setTimeout()
//setInterval()
//clearInterval()

//console.log(module)

// const logger = require("./logger") ; 

// logger.log("test message......");


// const path = require("path");

// const pathObj = path.parse(__filename);
// console.log(pathObj)

//Os:
// const os = require('os')

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total Memory:${totalMemory}`);
// console.log(`Total Memory:${freeMemory}`);

//Fs:
//const fs = require('fs');

// const files = fs.readdirSync("./");

// console.log(files)

// fs.readdir("./", function (err, files){
//     if(err) console.log("Error", err);
//     else console.log("Result", files)


// })





//EVENT: //A signal that something has happened:


//HTTP: nesta3emloha bch na3emlo web server ==> //raise an event (New request)

 const { Socket } = require('dgram');
const EventEmitter = require('events');

// const emitter = new EventEmitter();

// //Resigter a listener
// emitter.on ('messageLogged', (arg)=>{ //emitter.addListene()
//     console.log("Listener called !", arg)

// }) 

// //Raise an event
// emitter.emit('messageLogged', {id: 1, url:  'http://'}) //produce- signalling fama 7aja saret fi app 



//Extending EventEmitter :


// const log = require('./logger')
// log('test mrssage!')


// const Logger = require('./logger');

// const logger = new Logger();

// //Resigter a listener
// logger.on('messageLogged', (arg)=>{
//     console.log('Listener called !', arg);
// });

// logger.log("test message!")




//HTTP Module //networking app :
const http = require('http');

// const server = http.createServer();

// server.on("connection", (Socket)=>{
//     console.log("New Connection...")
// });

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Hello World");
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end()
    }
})
server.listen(3000);
console.log("listening on port 3000...");





