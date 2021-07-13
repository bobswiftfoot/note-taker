const router = require('express').Router();
const notes = require('../../db/db');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) =>
{
    console.log(uuidv4());
    res.json(notes);
});




module.exports  = router;