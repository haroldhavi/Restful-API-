
const db = require("../config/database");

const getPersonByFullnameService = async function (fullname) {

    const { rows } = await db.query(
        "SELECT * FROM person WHERE fullname=$1",
        [fullname]
    );
    return rows;
}
module.exports = getPersonByFullnameService;