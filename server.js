const express = require('express');
const apiRouter = require('./routes/api');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT;

app.use('/api',apiRouter)
app.listen(port);