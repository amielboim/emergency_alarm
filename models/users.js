/**
 * Created by amiel on 9/4/17.
 */

const mysql = require('mysql');
const config = require('../config');
const util = require('util');

class Users_table{


    constructor() {

        this.connection = mysql.createConnection({
            host     : config.db.host,
            user     : config.db.username,
            password : config.db.password,
            database : config.db.db_name
        });

        this.connection.connect();
       // console.log(module);

    }

     getUser(phone) {
         return new Promise((resolve, reject) => {
             let sql = "SELECT * FROM users WHERE phone = ?";
             this.connection.query(sql, [phone], (error, results, fields) => {
                 if (error) throw(error);
                 if (results.length == 0)reject()
                 resolve(results[0]);
             });
         })

    }

    isUserExist(phone) {

       /* return new Promise(resolve,reject) => {
            try{
                this.getUser(phone)
            }

        }*/
    }

    register(user_data) {
        return new Promise((resolve,reject) => {
            this.connection.query('INSERT INTO users SET ?', user_data, function (error, results, fields) {
                if (error) throw(error);
                resolve(results.insertId);

            });
        })

    }

}

module.exports = new Users_table();