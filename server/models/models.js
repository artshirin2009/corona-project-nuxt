const Sequelize = require('sequelize');
const sequelize = require('../db/connection');
const Model = Sequelize.Model;
class Country extends Model { }
class City extends Model { }
class Category extends Model { }

Country.init({
    title: {
        type: Sequelize.STRING,
        defaultValue: 'Noname Country',
        allowNull: false,
    },
    alias: {
        type: Sequelize.STRING,
        defaultValue: 'noname-country',
        allowNull: false,
    }

}, {
    modelName: 'country',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    sequelize
});

City.init({
    title: {
        type: Sequelize.STRING,
        defaultValue: 'Noname City',
        allowNull: false,
    },
    alias: {
        type: Sequelize.STRING,
        defaultValue: 'noname-city',
        allowNull: false,
    }

}, {
    modelName: 'city',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    sequelize
});

Country.hasMany(City);

Category.init({
    title: {
        type: Sequelize.STRING,
        defaultValue: 'Noname Category',
        allowNull: false,
    },
    alias: {
        type: Sequelize.STRING,
        defaultValue: 'noname-category',
        allowNull: false,
    }

}, {
    modelName: 'category',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
    sequelize
});


async function createTables() {
    // await Country.sync(
    //     //{ force: true }
    // )
    // await City.sync(
    //     //{ force: true }
    // )
    await Category.sync(
        //{ force: true }
    )
    console.log('done');
}
 //createTables();

module.exports = {
    Country, City, Category
}
