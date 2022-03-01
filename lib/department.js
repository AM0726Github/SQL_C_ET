const cTable = require('console.table');
const db = require('../config/connection');

async function ShowDepartments() {
    const sql = `SELECT department.*, SUM(role.salary) AS total_utilized_budget
                FROM department
                LEFT JOIN role ON department.id = role.department_id
                LEFT JOIN employee ON role.id = employee.role_id
                GROUP BY department.id`;
    return db.promise().query(sql)
    .then(([rows,fields]) => {
        console.table(rows);
        return rows;
    });
};

async function ShowDepartment() {
    const sql = `SELECT department.id, department.department_name FROM department`;
    return db.promise().query(sql)
    .then(([rows,fields]) => {
        var deptArray = [];
        for (let i = 0; i < rows.length; i++) {
            deptArray.push({ id: rows[i].id, department_name: rows[i].department_name });
        }
        return rows;
    });
    
};

async function pushToDepartment(name) {
    const sql = `INSERT INTO department (department_name) VALUES (?)`;
    return db.promise().query(sql, name)
    .then(([row,fields]) => {
        console.log(`A new department  "${name}" was added with an ID of ${row.insertId}`);
        return row;
    });
};

async function deleteDepartment(id) {
    const sql = `DELETE FROM department WHERE id = ?`;
    return db.promise().query(sql, id)
    .then(([row,fields]) => {
        console.log(`The department with an ID of ${id} has been deleted`);
        return row;
    });
};

module.exports = { ShowDepartments, ShowDepartment, pushToDepartment, deleteDepartment };