const db = require('../data/dbconfig');

module.exports = {
    get,
    add,
}

function get() {
    return db("projects")
}

function getById(id) {
    return db("projects")
        .where({ id })
        .first();
}

function add(project) {
    return db("projects")
        .insert(project)
        .then(ids => {
            return getById(ids[0])
        })
}