// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests to send the friends JSON object
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // POST , when requested submitted to post, push the new object to array and respond back as true;
    app.post("/api/friends", function (req, res) {

        friendsData.push(req.body);
        res.json(true);

    });

};
