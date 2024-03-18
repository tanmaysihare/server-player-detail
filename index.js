const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const db = require('./models');

const playerDetailRouter = require('./routes/PlayerDetail');
app.use('/playerDetail',playerDetailRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
    console.log('server is running on port 3001');
});
});