var intervalSpan = 75;
var removalTries = 20; 
var intervalIndex = 0; 

window.addEventListener('load', function () {


    var intervalID = setInterval(function(){ 
        intervalIndex++;
        if (intervalIndex > removalTries) {
            clearInterval(intervalID);
        }

        document.querySelectorAll('[class^="license_system-messages-wrapper"]').forEach(e => {
            clearInterval(intervalID);
            e.setAttribute("style", "display: none;");
        });

    }, intervalSpan);
});
