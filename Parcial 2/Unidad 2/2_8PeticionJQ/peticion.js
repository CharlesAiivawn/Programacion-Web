$(document).ready(function() {
    $("#btnJquery").click(function() {
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random",
            method: "GET",
            success: function(data) {
                $("#rp").text(data.value);
            },
        });
    });
});