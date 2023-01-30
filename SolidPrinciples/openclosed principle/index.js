// Open-Closed principle requires that classes should be open for extension and closed to modification.
let allowedRoles = ["ceo", "cto", "cfo", "staff"]

function checkPrivilege(employee) {
    if (allowedRoles.includes(employee.role)) {
        // employee has privileges
        return true;
    } else {
        return false;
    }

}
// we dont have to modify the existing code rather, we can extend it to add a new role

function addRole(role) {
    allowedRoles.push(role)
}