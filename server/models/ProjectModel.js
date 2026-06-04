const db = require("../config/db");

const getProjects = (callback) => {

  db.query(
    "SELECT * FROM projects",
    callback
  );

};

module.exports = { getProjects };