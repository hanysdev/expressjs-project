const { Sequelize } = require('sequelize');

// Utwórz nową instancję Sequelize z konfiguracją
const sequelize = new Sequelize({
  dialect: 'sqlite',      // Wybierz SQLite jako dialekt
  storage: 'database.sqlite', // Ścieżka do pliku SQLite
});

module.exports = sequelize;