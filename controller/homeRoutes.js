const router = require('express').Router();
router.get("/", (req, res) => {
    res.render("birthchart")
})

module.exports = router