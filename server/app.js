require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./config/db.config');
db();

const router = require('./routes/index.routes');
app.use('/', router);

const roomRouter = require('./routes/rooms.routes');
app.use('/', roomRouter);

const reviewRouter = require('./routes/review.routes');
app.use('/', reviewRouter);

app.listen(4000, () => console.log(`Server up and running at port ${4000}`));
