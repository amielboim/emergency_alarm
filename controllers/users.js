/**
 * Created by amiel on 9/3/17.
 */

var validator = require('validator');
var helpers = require('../helpers/output');
var user_model = require('../models/users');

module.exports.controller = function(app) {

    /**
     * a home page route
     */
    app.post('/users/register',(req, res) => {

        var data = req.body;

        if(Object.keys(data).length === 0 && data.constructor === Object){
           // res.render('message', {message:'No received data'})
            res.send(helpers.output('No received data',1));
        }

        if(typeof data.phone == 'undefined' || !validator.isMobilePhone(data.phone,['he-IL'])){
            res.send(helpers.output('Not valid phone number',1));
        }

        if(typeof data.fname == 'undefined' || !validator.isAlpha(data.fname)){
            res.send(helpers.output('Not valid name',1));
        }

        user_model.getUser(data.phone)
            .then(()=>{
            res.send(helpers.output('User exists',2));
            })
            .catch(() => {
                user_model.register(data)
                    .then(() => {
                        res.send(helpers.output('User saved',0));
                    })
                    .catch(error => {
                        res.send(helpers.output(error,3));
                    });
            })



    });

    /**
     * About page route
     */
    app.get('/register/web', function(req, res) {
        // any logic goes here
        res.render('message')
    });

}