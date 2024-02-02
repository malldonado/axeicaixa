const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
const axios = require('axios');
const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());

//routes
// readdirSync('./routes/').map(r => app.use('/', require('./routes/' + r)));

//database connect
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('database connected successfully');
  })
  .catch(e => {
    console.log('error connecting to mongodb', e);
  });

//tracking

app.get('/tracking', (req, res) => {
  const getData = async () => {
    const response = await axios.get(
      'https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=LX002249507BR'
    );
    console.log(response)
  };
})


//running server
app.listen(8000, () => {
  console.log('Running on port 8000');
});
