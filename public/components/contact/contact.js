var app = angular.module("app.contact", ["ngRoute", "myapp"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/contact", {
        templateUrl: "./components/contact/contact.html",
        controller: "contactCtrl"
    })
})
app.controller("contactCtrl", function ($scope, lebanonService) {
    $(document).ready(function() {
    var panels = $('.vote-results');
    var panelsButton = $('.dropdown-results');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('Hide Results');
            }
            else
            {
                currentButton.html('View Results');
            }
        })
    });
});

})
