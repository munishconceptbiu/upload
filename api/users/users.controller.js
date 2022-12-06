const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const userService = require('./user.service');


exports.authenticateSchema = async function(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

exports.authenticate = async function(req, res, next) {
    userService.authenticate(req.body)
        .then(data => {
            res.json({user: data, message: 'User login successful' })
        })
        .catch(next);
}

exports.registerSchema = async function(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(6).required()
    });
    validateRequest(req, next, schema);
}

exports.addUser = async function(req, res, next) {
     userService.create(req.body)
        .then((user) =>{
            res.json({user: user, message: 'User added successful' })
        })
        .catch(next);
}

exports.getClientList = async function(req, res, next) {
    userService.clientlist(req.headers.authorization)
    .then(data => {
        res.json({clientlist: data.data.result, message: "Client list fetched successfully"});
    })
    .catch(next);
}


exports.getUserList = async function(req, res, next) {
    userService.getAll()
    .then(data => {
        res.json({users: data, message: "Users list fetched successfully"});
    })
    .catch(next);
}

exports.getSingleUser = async function(req, res, next) {
    userService.getById(req.params.user_id)
    .then(data => { 
        res.json({user: data, message: "User fetched successfully"});
    })
    .catch(next);
}

exports.updateUser = async function(req, res, next) {
    userService.update(req.params.user_id, req.body)
       .then((user) =>{
           res.json({user: user, message: 'User updated successful' })
       })
       .catch(next);
}

exports.deleteUser = async function(req, res, next) {
    userService.delete(req.params.user_id)
       .then((user) =>{
           res.json({user: user, message: 'User deleted successful' })
       })
       .catch(next);
}