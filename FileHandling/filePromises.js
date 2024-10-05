// to avoide the callback hell, we have fspromises in nodeJs
const fsPromises = require('fs').promises
const path = require('path')
const fileOperations = async () => {
    try {
        const read_data = await fsPromises.readFile(path.join(__dirname, "files", "newfile.txt"), 'utf-8')
        console.log(read_data, "READING DONE!!!")
        await fsPromises.unlink(path.join(__dirname, "files", "newfile.txt"), 'utf-8')
        console.log("DELETING DONE!!!")
        await fsPromises.writeFile(path.join(__dirname, "files", "newfile.txt"), read_data)
        console.log("WRITING DONE!!!")
        await fsPromises.appendFile(path.join(__dirname, "files", "newfile.txt"), "\nNew Data Written to the file")
        console.log("APPENDING DONE!!!")
        await fsPromises.rename(path.join(__dirname, "files", "newfile.txt"), path.join(__dirname, "files", "rupesh.txt"))
        console.log("RANAMING DONE!!!")
    } catch (err) {
        console.error(err)
    }
}

fileOperations()