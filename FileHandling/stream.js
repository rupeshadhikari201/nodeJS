const fs = require('fs')
const path = require('path')

const readstream = fs.createReadStream("./files/lorem.txt", err => {
    if (err) {
        console.error("Error Creating readstream ", err)
    }
})
console.log("Read Stream Created!!!")

const writestream = fs.createWriteStream('./files/new-lorem.txt')
console.log("Write Stream Created!!!")



// write data on steam,
readstream.on('data', (DataChunk) => {
    writestream.write(DataChunk)
    console.log("Steam Written!!")
})