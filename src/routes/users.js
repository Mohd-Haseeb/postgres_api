const express = require('express');

const router = express.Router();

const UserRepo = require('../repos/user-repo');

router.get('/users', async (req, res, next) => {

    const users = await UserRepo.find();

    res.send(users);

});

router.get('/users/:id', async (req, res) => {

    const { id } = req.params;

    const user = await UserRepo.findById(id);

    res.send(user);

});

router.post('/users', async (req, res) => {

    const {username, bio} = req.body;
    const result = await UserRepo.insert(username, bio);

    res.send(result);

});

router.put('/users/:id', async (req, res) => {

    const {id} = req.params;

    const {username, bio} = req.body;

    const result = await UserRepo.update(id, username, bio);

    return result;

});

router.delete('/users/:id', async (req, res) => {
    const {id} = req.params;

    const user = await UserRepo.delete(id);

    if(user)
        res.send(user)
    else
        res.sendStatus(404);
});

module.exports = router;