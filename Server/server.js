const http = require('http')
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 3500

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //send index.html to server
    if (req.url = '/' || req.url === "index.html") {
        res.statusCode = 200
        res.setHeader('Content-Type', 'html/text')
        p = path.join(__dirname, 'views', 'index.html')
        fs.readFile(p, 'utf-8', (err, data) => {
            if (!err) {
                res.end(data)
            } else {
                console.error(err)
            }
        })
    }
})


server.listen(PORT, () => console.log(`Server Running on Port no ${PORT}`))