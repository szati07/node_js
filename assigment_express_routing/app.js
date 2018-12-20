const path = require('path');

const express = require('express');

const app = express();

const indexRouter = require('./routes/index');
const testRouter = require('./routes/test');

app.use(express.static(path.join(__dirname, '/public')));

app.use(indexRouter);
app.use(testRouter);

app.listen(3000);