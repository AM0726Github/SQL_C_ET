const cTable = require('console.table');
const db = require('../config/connection');

// Get all departments
async function getDepartments() {
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
}

// Get list of departments for inquirer selection
async function getDepartmentInfo() {
    const sql = `SELECT department.id, department.name FROM department`;
    return db.promise().query(sql)
    .then(([rows,fields]) => {
        var deptArray = [];
        for (let i = 0; i < rows.length; i++) {
            deptArray.push({ id: rows[i].id, name: rows[i].name });
        }
        return deptArray;
    });
    
}

// Add new department
async function addDepartment(name) {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    return db.promise().query(sql, name)
    .then(([row,fields]) => {
        console.log(`A new department with the name "${name}" was added with an ID of ${row.insertId}`);
        return row;
    });
}

// Delete department
async function deleteDepartment(id) {
    const sql = `DELETE FROM department WHERE id = ?`;
    return db.promise().query(sql, id)
    .then(([row,fields]) => {
        console.log(`The department with an ID of ${id} has been deleted`);
        return row;
    });
}

module.exports = { getDepartments, getDepartmentInfo, addDepartment, deleteDepartment };