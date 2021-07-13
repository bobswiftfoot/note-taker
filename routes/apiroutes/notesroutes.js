const router = require('express').Router();
let { notes } = require('../../db/db');
const { v4: uuidv4 } = require('uuid');
const { createNewNote, saveNotes, validateNote } = require('../../lib/notes');

router.get('/notes', (req, res) =>
{
    res.json(notes);
});

router.post('/notes', (req, res) =>
{
    // set unique ID
    req.body.id = uuidv4();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body))
    {
        res.status(400).send('The note is not properly formatted.');
    }
    else
    {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) =>
{
    const id = req.params.id;
    let deleted = false;
    let newNotesArray = [];

    for(let i = 0; i < notes.length; i++)
    {
        if(notes[i].id === id)
        {
            deleted = true;
        }
        else
        {
            newNotesArray.push(notes[i]);
        }
    }

    if(deleted)
    {
        saveNotes(newNotesArray);
        notes = newNotesArray;
        res.json({
            message: 'deleted',
            id: req.params.id
        });
    }
    else
    {
        res.json({
            message: 'Id not found'
        });
    }
});

module.exports  = router;