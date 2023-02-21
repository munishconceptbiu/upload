const express = require('express');
const journalistService = require('./journalist.service');

exports.getAll = async function (req, res, next) {
    let journalist = await journalistService.getAll();
    res.json({ journalist: journalist, message: 'Journalist list successful fetched' })
}   

exports.getSingle = async function (req, res, next) {
    let journalist = await journalistService.getById(req.params.id);
    res.json({ journalist: journalist, message: 'Journalist list successful fetched' })
}   

exports.add = async function (req, res, next) {
    let journalist = await journalistService.save(req.body);
    res.json({ journalist: journalist, message: 'Journalist successful added' })
}   

exports.update = async function (req, res, next) {
    let journalist = await journalistService.update(req.body, req.params.id);
    res.json({ journalist: journalist, message: 'Journalist list successful fetched' })
} 

exports.delete = async function (req, res, next) {
    let journalist = await journalistService.delete(req.params.id);
    res.json({ journalist: {}, message: 'Journalist successful deleted' })
} 

exports.getAllPublicaitonWise = async function (req, res, next) {
    let journalist = await journalistService.getAllPublicaitonWise(req.params.publicationid);
    res.json({ journalist: journalist, message: 'Journalist list successful fetched' })
}  
