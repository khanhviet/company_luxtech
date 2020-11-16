const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
//set up express
const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();
app.listen(PORT, () => { console.log('the server has start') });
mongoose.connect(process.env.MOGOOSE_CONNECTION_STRING, {
    useNewUrlParser: true, useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('mongoose connection');
})
//set up router
app.use("/users", require('./src/controllers/routes/user/Login'))
app.use("/users", require('./src/controllers/routes/user/Register'))
app.use('/', require('./src/controllers/routes/pages/Home'))