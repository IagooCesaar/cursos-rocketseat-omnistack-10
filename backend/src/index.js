const express  = require('express');
const mongoose = require('mongoose');

const routes   = require('./routes');

const app      = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@icfn-mpexq.mongodb.net/omnistack10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get('/', (req, res) => {
    res.json({"ok": true})
})
app.use(express.json());
app.use(routes);
app.listen(3333);