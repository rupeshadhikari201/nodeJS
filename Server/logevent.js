// 1. install nodemon
// 2. initialize the node (it creates packages.json file)
// 3. install data-fns
// 4. install npm  (creates node_modules and packages-lock.json)
// 5. .gitignore file creation
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises


const logEvents = async (message) => {
    const DateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${DateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try {
        if (!fs.existsSync(path.join(__dirname, "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "logs"))
                .then(() => console.log("Directory created successfully!"))
                .catch((err) => console.log(err))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'logevents.txt'), logItem)

    } catch (err) {
        console.error(err)
    }
}

module.exports = logEvents






// console.log(format(new Date, 'yyyyMMdd\tHH:mm:ss'))
// console.log(uuid())
// console.log("Checking if the change is automaticaly detected by nodemon or not")
// console.log("perfect, its working like a wow. ")