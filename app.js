const retweetController = require('./controller/retweetController');
const likeController = require('./controller/likeController');
const app = require('express')();
const morgan = require('morgan');

retweetController.start();
likeController.start();

app.use(morgan('dev'));

app.listen(4000, () => {
  console.log('Your app is listening on port 4k');
})

