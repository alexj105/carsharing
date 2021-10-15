const dotenv = require('dotenv');
const express = require('express');
const db = require('./config/db.config');
const carsRouter = require('./src/routes/cars');
const runsRouter = require('./src/routes/runs');
const driversRouter = require('./src/routes/driver');
const creditCardRouter = require('./src/routes/creditCard');

const app = express();
dotenv.config();

app.use(express.json());
app.use(carsRouter);
app.use(runsRouter);
app.use(driversRouter);
app.use(creditCardRouter);

// db.sequelize.sync().then(() => {
//   console.log('Drop and re-sync db.');
// });

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

app.listen(process.env.PORT, () => {
  console.log(`Server start on port: ${process.env.PORT}`);
});
