const express = require('express');
const app = express();

const pageRoutes = require('./routes/pages');
const blogRoutes = require('./routes/blogs');

app.use('/', pageRoutes);
app.use('/blogs', blogRoutes);

module.exports = app;
