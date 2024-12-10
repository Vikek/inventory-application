const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const gamesRouter = require('./routes/gamesRouter');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use('/', usersRouter);
app.use('/categories', categoriesRouter);
app.use('/games', gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));