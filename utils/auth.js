const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("login");
  } else {
    next();
  }
  console.info("After withAuth:", req.session.logged_in);
};

module.exports = withAuth;
