const express = require('express');
const htmlRoutes = require('./routes/htmlroutes');
const apiroutes = require('./routes/apiroutes');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () =>
{
    console.log(`API server now on port ${PORT}!`);
});

app.use('/api', apiroutes);
app.use('/', htmlRoutes);