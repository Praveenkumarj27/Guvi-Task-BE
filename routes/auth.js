const {
    login,
    register,
    logOut,
    editUser,
    all,
    id,
  } = require("../controllers/user");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get('/all',all);
  router.get('/:id',id)
  router.put('/edit-user/:id',editUser);

  module.exports = router;

