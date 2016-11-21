var models  = require('../../models');
var express = require('express');
var router  = express.Router();

var factory = require('../../factories/quest');

// get all quests
router.get('/', function(req, res) {
  models.Quest.findAll({
    include: [models.Resource]
  })
  .then(function(quests) {
    res.json({status: 'ok', data: quests});
  });
});

// get single quest
router.get('/:id', function(req, res) {
  models.Quest.find({
    where: { id: req.params.id },
    include: [models.Resource]
  })
  .then(function(quest) {
    if (quest !== null) {
      res.json({status: 'ok', data: quest});
    } else {
      res.json({status: 'ko'});
    }
  });
});

// add a quest and update sockets listeners
router.post('/add', function(req, res) {
  var created = factory.build();
  models.Quest.create(created)
  .then(function(quest) {
    quest.setResources(created.Resources);
    quest.reload()
    .then(function(quest) {
      models.Quest.findAll({
        include: [models.Resource]
      })
      .then(function(quests) {
        res.io.emit('updateQuests', quests);
        res.json({status: 'ok', data: quests});
      });
    });
  });
});

module.exports = router;