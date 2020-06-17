const likeController = require('./controller/likeController');
const app = require('express')();
const morgan = require('morgan');

likeController.start();

app.use(morgan('dev'));

app.get('/', (_, res) => {
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
})

