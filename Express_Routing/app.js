"use strict"
/* ----------------------------------------------- *

    NODEJS EXPRESS & ROUTINGS

/* ----------------------------------------------- */
// https://expressjs.com/
// $ npm i express dotenv

const express = require('express')
const app = express()

/* ----------------------------------------------- *
// http.createServer((req, res) => {
//     if (req.url = '/') {
//         if (req.method == 'GET') {
//         } else {
//         }
//     } else if (req.url = '/second') {
//     }
// })

app.get('/', (req, res) => {
    // res.end('app.get çalıştı')
    // const obj = {
    //     error: false,
    //     message: 'Welcome'
    // }
    // res.end(JSON.stringify(obj))

    // SEND METHOD:
    // res.send('Welcome to World')
    // res.send({
    //     error: false,
    //     message: 'Welcome'
    // })
    // res.send([0, 1, 2])

    // STATUS METHOD:
    // res.status(404)
    // res.send({
    //     error: false,
    //     message: 'Page Not Found'
    // })

    // Output:
    res.status(404).send({
        error: false,
        message: 'Page Not Found'
    })
    
})
app.post('/', (req, res) => {
    res.end('app.post çalıştı')  
})
app.put('/', (req, res) => {
    res.end('app.put çalıştı')  
})
app.delete('/', (req, res) => {
    res.end('app.delete çalıştı')  
})
/* ----------------------------------------------- */

// app.get('/', (req, res) => { res.end('app.get çalıştı')})
// app.post('/', (req, res) => { res.end('app.post çalıştı')})
// app.put('/', (req, res) => { res.end('app.put çalıştı')})
// app.delete('/', (req, res) => { res.end('app.delete çalıştı')})

// ALL METHOD:
// app.all('/', (req, res) => { res.end('app.all çalıştı')})

// ROUTE METHOD:
// app.route('/')
//     .get((req, res) => { res.end('app.get çalıştı')})
//     .post((req, res) => { res.end('app.post çalıştı')})
//     .put((req, res) => { res.end('app.put çalıştı')})
//     .delete((req, res) => { res.end('app.delete çalıştı')})

/* ----------------------------------------------- */
/* ----------------------------------------------- */
// dotenv çalıştır:
require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))

/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */
/* ----------------------------------------------- */