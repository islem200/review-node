
// console.log(_filename)
// console.log(_dirname)
// const url = "http://mylogger.io/log";


// function log(message){
//     //Send an HTTP request
//     console.log(message);
// }

// module.exports.log = log;

//par défaut code en fonction :
// (function (exports, require, module, _filename, _dirname){
//     const url = "http://mylogger.io/log";


// function log(message){
//     //Send an HTTP request
//     console.log(message);
// }

// module.exports.log = log;
// //or
// module.exports = log;
// //or
// exports.log = log

//});



//Extending EventEmitter :

const EventEmitter = require('events');

 //const emitter = new EventEmitter();

//  function log(message){
//     console.log(message);
//     emitter.emit('messageLogged', {id: 1, url:  'http://'}) 

//  }

//  module.exports = log;


// class Logger extends EventEmitter{
//     log(message){
//         console.log(message);

//         this.emit('messageLogged', {id: 1, url:  'http://'})
        

//     }


    
    
// }
// module.exports = Logger;
