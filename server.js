const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({dest: 'docs/uploads'})
const app = express()


app.options('/upload',cors())
app.get('/', (req, res, next) => {
    res.send('Hello World')
})

app.get('/get', (req, res, next) => {
    res.send('get some message')
})
app.post('/upload',cors(),upload.single('file'), (req, res, next) => {
    res.json(req.file.filename)
})

app.get('/preview/:key',cors(), (req, res) => {
    let str = `${req.params.key}`
    str = str.slice(1,str.length-1)
    res.sendFile(`uploads/${str}`,{
        root:__dirname,
        headers:{
            'Content-Type':'image/jpeg'
        }
    })
})

app.listen(3000)
