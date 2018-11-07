const express = require('express');

const routes = express.Router();
const TweetController = require('./controllers/TweetController');
const likeController = require('./controllers/LikeController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);
routes.post('/like/:id', likeController.store);

module.exports = routes;