'use strict';

module.exports = function(sequelize, DataTypes) {
  var Spell = sequelize.define('Spell', {
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    class: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    heal: DataTypes.INTEGER,
    mana: DataTypes.INTEGER,
    burn: DataTypes.BOOLEAN,
    poison: DataTypes.BOOLEAN,
    shock: DataTypes.BOOLEAN,
    stun: DataTypes.BOOLEAN,
    freeze: DataTypes.BOOLEAN,
    rarity: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Spell;
};