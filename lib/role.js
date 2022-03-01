const cTable = require('console.table');
const db = require('../config/connection');
const { ShowDepartment } = require('./department');

async function getRoles() {
    const sql = `SELECT role.id, role.title, role.salary, department.department_name
                AS department_name
                FROM role
                LEFT JOIN department
                ON role.department_id = department.id
                ORDER BY role.department_id`;
    return db.promise().query(sql)
    .then(([rows,fields]) => {
        console.table(rows);
        return rows;
    });
};

async function getRoleInfo() {
    const sql = `SELECT role.id, role.title FROM role`;
    return db.promise().query(sql)
    .then(([rows,fields]) => {
        var rolesArray = [];
        for (let i = 0; i < rows.length; i++) {
            rolesArray.push({ id: rows[i].id, title: rows[i].title });
        }
        return rolesArray;
    });
};

async function addRole(title, salary, department) {
    var depts = await ShowDepartment();
    var deptIds = [];
    var deptNames = [];
    for (var i = 0; i < depts.length; i++) {
        deptIds.push(depts[i].id);
        deptNames.push(depts[i].department_name);
    }
    var department_id = deptIds[deptNames.indexOf(department)];

    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    const params = [title, salary, department_id];
    return db.promise().query(sql, params)
    .then(([row,fields]) => {
        console.log(`A new role with the title "${title}" and salary of ${salary} was added with an ID of ${row.insertId} to department ${department}`);
        return row;
    });
};

async function updateRole(id, column, input) {
    var col = '';
    if (column === 'Salary') {
        col = 'salary';
    } else if (column === 'Department') {
        col = 'department_id';
    }
    var sql = `UPDATE role SET ${col} = ? WHERE id = ?`;
    var params = [input, id];
    return db.promise().query(sql, params)
    .then(([row,fields]) => {
        console.log(`The role with an ID of ${id} has had its ${col} updated to ${input}`);
        return row;
    });
};

async function deleteRole(id) {
    const sql = `DELETE FROM role WHERE id = ?`;
    return db.promise().query(sql, id)
    .then(([row,fields]) => {
        console.log(`The role with an ID of ${id} has been deleted`);
        return row;
    });
};

module.exports = { getRoles, getRoleInfo, addRole, updateRole, deleteRole };