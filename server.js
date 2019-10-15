const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const app = express()


app.options('/upload',cors())

app.get('/', (req, res, next) => {
    res.send('Hello World')
})

app.get('/get', (req, res, next) => {
    res.send('get some message')
})
app.post('/upload',cors(),upload.single('file'), (req, res, next) => {
    res.send(req.file.filename)
})

app.get('/preview/:key',cors(), (req, res) => {
    res.sendFile(`uploads/${req.params.key}`,{
        root:__dirname,
        headers:{
            'Content-Type':'image/jpeg'
        }
    })
})

let port = process.env.PORT || 3000
console.log(port)
app.listen(port)
