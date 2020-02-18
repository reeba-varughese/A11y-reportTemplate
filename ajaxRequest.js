$("document").ready(function () {
    // getting parameter from urlbar
    let urlParam = window.location.search.split("=")[1];

    // ajax setup
    let ajaxUrl = "http://192.168.35.30:7444/report"
    let postData = new Object();
    postData.hash = urlParam;
           
    $.ajax({
        url: ajaxUrl,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(postData),
        dataType: "json",
        success: function(response) {
            console.log(response)
            
        },
        error: function(error) {
            console.log(error)
        }
    });
})