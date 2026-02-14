const express = require("express");
const router = express.Router();

const {
  adminSignup,
  login,
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  getProfile
} = require("../controllers/userController");

const auth = require("../middleware/authMiddleware");
const checkRole = require("../middleware/roleMiddleware");

router.post("/admin/signup", adminSignup);
router.post("/login", login);
router.post("/admin/add-employee", auth, checkRole("admin"), addEmployee);
router.get("/admin/employees", auth, checkRole("admin"), getEmployees);
router.put("/admin/employee/:id", auth, checkRole("admin"), updateEmployee);
router.delete("/admin/employee/:id", auth, checkRole("admin"), deleteEmployee);
router.get("/employee/profile", auth, checkRole("employee"), getProfile);


module.exports = router;
