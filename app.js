const retweetController = require('./controller/retweetController');
const likeController = require('./controller/likeController');
const app = require('express')();
const morgan = require('morgan');

retweetController.start();
likeController.start();

app.use(morgan('dev'));

app.get('/', (_, res) => {
  res.sendStatus(200);
});

app.listen(4000, () => {
  console.log('Your app is listening on port 4k');
})

