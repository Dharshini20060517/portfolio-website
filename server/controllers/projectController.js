const db = require("../config/db");

const getProjects = (req, res) => {
    const sql = "SELECT * FROM projects";

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.status(200).json(result);
    });
};

module.exports = {
    getProjects
};