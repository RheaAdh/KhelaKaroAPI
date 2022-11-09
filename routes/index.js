const express = require('express');
const router = express.Router();

//test route
router.get('/', (req, res) => {
    return res.json('Welcome to KhelaKaro API');
});

module.exports = router;
