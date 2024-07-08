"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})
/* ------------------------------------------------------- */

const {Sequelize, DataTypes} = require('sequelize')

// Connection:
// const seguelize = new Sequelize('sqlite:./db.sqlite3')
// const seguelize = new Sequelize('sqlite: + process.env.SQLITE')
const seguelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

// Sequelize Model:
// sequelize.define('tableName', {...columns })

const Todo = seguelize.define('todos', {

    id: {
        type: DataTypes.INTEGER, //DataType
        allowNull: false, //default: true // sütun verisi boş olabilir mi?
        unique: true, // default: false // benzersiz kayıt mı?
        defaultValue: 0, // Kayıt eklendiğinde default olarak ne yazılsın?
        // comment: 'yorum ekleyebiliriz',
        // primaryKey: true, // default: false // tablonun her bir kaydını ifade eden benzersiz numara
        // autoIncrement: true, // default: false // sütun değeri her bir kayıtta otomatik olarak 1 artsın mı ? 
        // field: 'custom_fiel_name'

    },

})


/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */


// continue from here...

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500
    console.log('errorHandler worked.')
    res.status(errorStatusCode).send({
        error: true, // special data
        message: err.message, // error string message
        cause: err.cause, // error option cause
        // stack: err.stack, // error details
    })
}
app.use(errorHandler)
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));


