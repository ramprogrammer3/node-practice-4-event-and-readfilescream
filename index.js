// console.log("**********************************************")
// console.log("event module in node js")
// console.log("**********************************************")
// console.log("________________________________________________")

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on("scream", ()=>{
    console.log("scream event has been triggered");
})
emitter.emit("scream");

// console.log("________________________________________________")
const events = require('events');
const emitter = new events.EventEmitter();
emitter.on("click", ()=>{
    console.log("click event has been triggered");
})
emitter.emit("click");
// console.log("________________________________________________")
const events = require('events');
const emitter = new events.EventEmitter();
emitter.on("click", ()=>{
    console.log("click event has been triggered");
})
emitter.emit("screan");

// console.log("________________________________________________")
const fs = require('fs');
fs.readFile("./text.txt", 'utf-8',(err,text)=>{
    console.log(text)
})
// console.log("________________________________________________")

const fs = require('fs');
fs.readFile("./text.txt", 'utf-8',(err,text)=>{
    console.log(text.trim().length)
})
// console.log("________________________________________________")

const fs = require('fs');
const readData = fs.createReadStream("./text.txt")
readData.on("data",() =>{
    console.log("Data is being triggered")
})

// console.log("________________________________________________")
const fs = require('fs');
const readData = fs.createReadStream("./text.txt")
readData.on("data",(data) =>{
    console.log(data.length)
})

// console.log("________________________________________________")

const fs = require('fs');

fs.readFile('./text.txt','utf-8',(err,text)=>{
    console.log("reading text without stream" + text.trim().length)
})
const readData = fs.createReadStream("./text.txt")
readData.on("data",(data) =>{
    console.log("reading text using stream" + data.length)
})
