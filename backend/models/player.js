'use strict';

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    platinum: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // m2o association
        models.Player.belongsTo(models.Item, {as: 'Ring'});
        models.Player.belongsTo(models.Item, {as: 'Helm'});
        models.Player.belongsTo(models.Item, {as: 'Necklace'});
        models.Player.belongsTo(models.Item, {as: 'Weapon'});
        models.Player.belongsTo(models.Item, {as: 'Armor'});
        models.Player.belongsTo(models.Item, {as: 'Shield'});
        models.Player.belongsTo(models.Item, {as: 'Gloves'});
        models.Player.belongsTo(models.Item, {as: 'Boots'});
        models.Player.belongsTo(models.Item, {as: 'Potion'});
        // custom m2m association with "equiped" to distinguish between regular item and equiped one
        var PlayerItem = sequelize.define('PlayerItem', {
          quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
          }
        }, {
          timestamps: false,
          freezeTableName: true
        });
        models.Item.belongsToMany(models.Player, {through: PlayerItem});
        models.Player.belongsToMany(models.Item, {through: PlayerItem});
        // m2m association
        var PlayerSpell = sequelize.define('PlayerSpell', {
        }, {
          timestamps: false,
          freezeTableName: true
        });
        models.Spell.belongsToMany(models.Player, {through: PlayerSpell});
        models.Player.belongsToMany(models.Spell, {through: PlayerSpell});
        // m2m association
        var PlayerSkill = sequelize.define('PlayerSkill', {
        }, {
          timestamps: false,
          freezeTableName: true
        });
        models.Skill.belongsToMany(models.Player, {through: PlayerSkill});
        models.Player.belongsToMany(models.Skill, {through: PlayerSkill});
        // custom m2m association with "quantity" to count ammount of resources of the same type
        var PlayerResource = sequelize.define('PlayerResource', {
          quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
          }
        }, {
          timestamps: false,
          freezeTableName: true
        });
        models.Resource.belongsToMany(models.Player, {through: PlayerResource});
        models.Player.belongsToMany(models.Resource, {through: PlayerResource});
        // m2m association
        var PlayerRecipe = sequelize.define('PlayerRecipe', {
        }, {
          timestamps: false,
          freezeTableName: true
        });
        models.Recipe.belongsToMany(models.Player, {through: PlayerRecipe});
        models.Player.belongsToMany(models.Recipe, {through: PlayerRecipe});
        // m2m association
        var PlayerQuest = sequelize.define('PlayerQuest', {
        }, {
          timestamps: false,
          freezeTableName: true
        });
        models.Quest.belongsToMany(models.Player, {through: PlayerQuest});
        models.Player.belongsToMany(models.Quest, {through: PlayerQuest});
      }
    },
    timestamps: false,
    freezeTableName: true
  });

  return Player;
};