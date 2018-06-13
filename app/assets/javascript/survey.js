

// When user submits the survery below logic gets executed 

$("#submit").on("click", function (event) {

    event.preventDefault();

    function createFriend(name, photo, scores) {
        this.name = name;
        this.photo = photo;
        this.scores = scores
    }

    // get name & photo details
    var name = $('#name').val().trim();
    var photo = $('#photo').val().trim();

    if (name == "" || photo == "") {
        alert("Must provide name & Photo!");
        return false
    }

    // get all options values
    var scores = [];
    for (i = 0; i < $('.wrapquestion .custom-range').length; i++) {
        scores.push($('.wrapquestion .custom-range')[i].value);
    };

    // create new object to be embedded in POST request
    var newFriend = new createFriend(name, photo, scores);

    // post the successfully validated request to server

    $.post("/api/friends", newFriend,
        function (data) {

            // response receive as true, we are successful.
            if (data) {
                // Grab the result from the AJAX post to show match's name and photo are displayed.
                $("#match-name").text(data.name);
                $("#match-img").attr("src", data.photo);

                // Show the modal with the best match
                $("#results-modal").modal("toggle");
            }

        });

});