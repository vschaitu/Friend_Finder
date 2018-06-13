// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friend");

// ===============================================================================
// API ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests to send the friends JSON object
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // POST , when requested submitted to post, push the new object to array and respond back as true;
    app.post("/api/friends", function (req, res) {

        var input = req.body

        //set empty array to calcuate the difference for all friends in existing array items
        var diffArray = [];

        // for each friend object in the array, calculaate the diffrence of each score item and sum that up
        friendsData.forEach(obj => {
            var difference = 0;
            obj.scores.forEach((item, index) => {
                var friendscrore = parseInt(item);
                var userscrore = parseInt(input.scores[index]);
                difference += Math.abs(friendscrore - userscrore);
            });
            diffArray.push(difference);
        });

        // Get the least value of the difference array and corresponding index value of the friends Array
        var output = friendsData[diffArray.indexOf(Math.min(...diffArray))]

        //Now push the request to array
        friendsData.push(input);

        // send the response back to POST request
        res.json(output);

    });

};
