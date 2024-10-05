const fs = require('fs')

if (!fs.existsSync('./newDirectory')) {
    fs.mkdirSync("./newDirectory")
    console.log("New Directory Created")
}
else {
    console.log("Direcotry Already Exists")
}

if (fs.existsSync("./newDirectory")) {

    fs.rmdir("./newDirectory", err => {
        if (err) throw err
        console.log("Directory Removed")
    })

} else {
    console.log("Directory Doesn't exists. ")
}
