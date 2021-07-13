const path = require("path");
const fs = require("fs");

function createNewNote(body, notesArray)
{
    const note = body;

    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return body;
}

function saveNotes(notesArray)
{
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
}

function validateNote(note)
{
    if (!note.title || typeof note.title !== 'string')
        return false;
    if (!note.text || typeof note.text !== 'string')
        return false;
    return true;
}

module.exports = {
    createNewNote,
    saveNotes,
    validateNote
  };