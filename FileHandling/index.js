const fs = require('fs')

//readFile
fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log("Reading File Done")
})

// readFile using path module
const path = require('path')
fs.readFile(path.join(__dirname, 'files', 'lorem.txt'), 'utf-8', (err, data) => {
    if (err) throw err
    console.log("Writing File Done")
})

console.log("I might be called before readingFile")

// writeFile
const text = "Hello, i am writing to this file using nodejs"
fs.writeFile(path.join(__dirname, 'files', 'newfile.txt'), text, err => {
    if (err) throw err
    console.log('Data written to file')

    // first write file then append file as node is asyncronous
    fs.appendFile(path.join(__dirname, 'files', 'starter.txt'), "\nI am from Nepal, living in India", err => {
        if (err) throw err
        console.log("Data Appended to existing file, after writing file")

        // raname file after appending it
        fs.rename(path.join(__dirname, 'files', 'starter.txt'), path.join(__dirname, 'files', 'newfileranamed.txt'), err => {
            if (err) throw err
            console.log("Reamed the file, after appending it ")
        })
    })
})

// appendFile
fs.appendFile(path.join(__dirname, 'files', 'starter.txt'), "I am from Nepal, living in India", err => {
    if (err) throw err
    console.log("Data Appended to existing file.")
})

// exit on uncaught exception
process.on('uncaughtException', err => {
    console.error(`There is an uncaught exception ${err}`);
    process.exit(1);

})