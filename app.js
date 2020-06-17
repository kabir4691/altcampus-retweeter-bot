const likeController = require('./controller/likeController');
const app = require('express')();
const morgan = require('morgan');

likeController.start();

app.use(morgan('dev'));

app.get('/', (_, res) => {
  res.sendStatus(200);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Your app is listening on port ' + (process.env.PORT || 4000));
})

