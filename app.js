const wakeController = require('./controller/wakeController');
const retweetController = require('./controller/retweetController');
const likeController = require('./controller/likeController');

wakeController.start();
retweetController.start();
likeController.start();
