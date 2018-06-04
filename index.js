const express = require('express');

//App setup
const app = express();
let srerver = app.listen(4000, () => {
    console.log('listening to request on port 4000');
});

//Static file
app.use(express.static('public'));