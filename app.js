const retweetController = require('./controller/retweetController');
const likeController = require('./controller/likeController');
const app = require('express')();

retweetController.start();
likeController.start();

app.listen(4000, () => {
  console.log('Your app is listening on port 4k');
})

