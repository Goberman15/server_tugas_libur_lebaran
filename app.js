if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'development') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const router = require('./routers');
const { errHandler } = require('./middlewares/errHandler.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(errHandler);

app.listen(PORT, () => console.log(`War against Covid at port ${PORT}`))
