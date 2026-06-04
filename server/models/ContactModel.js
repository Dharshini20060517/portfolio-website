const db = require("../config/db");

const saveContact = (data, callback) => {
  const sql =
    "INSERT INTO contacts(name,email,message) VALUES(?,?,?)";

  db.query(
    sql,
    [data.name, data.email, data.message],
    callback
  );
};

module.exports = { saveContact };