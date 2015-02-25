$(document).ready(function() {
    $("#submit").on("click", generate);
    var urls = [];

    function generate() {
        var text = $("#input").val();
        var isValid = validateUrl(text);
        if (isValid)
            setTimeout(function() {
                getShortUrl(text);
            }, 1000
            );
    };

    function validateUrl(text) {
        var isValid;
        var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!text) {
            $("#urlResult").text("Please, enter URL");
            return false;
        };
        if (text.match(regex)) {
            if (urls.indexOf(text) === (-1)) {
                urls.push(text);
                isValid = true;
            } else {
                $("#urlResult").text("Short URL already exist");
                isValid = false;
            }
        } else {
            $("#urlResult").text("URL is not valid");
            isValid = false;
        }
        return isValid;
    };


    function addHistory(longUrl, shortUrl) {
        var date = new Date();
        $("#history").append("<li class='list-group-item'> <span class='text-success'>Time: </span>"
                            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() +
                            "<span class='text-success'> Request URL: </span>" + longUrl +
                            "<span class='text-success'>  Short URL: </span><a href='" + shortUrl + "'>" + shortUrl + "</a></li><br/>");
    };


    //server communication imitation
    function getShortUrl(text) {
        var result;
        //some logic here..
        //template : http://zo.om/A8GK
        result = "http://" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2) + "."
                          + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2) + "/"
                          + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)
                          + Math.random().toString().substr(3, 1)
                          + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

        $("#urlResult").text(result);
        addHistory(text, result);
    };
  });