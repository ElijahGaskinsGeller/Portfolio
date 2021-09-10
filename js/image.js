$(document).ready(function () {

    $('.image-preview').on('click', function (EventObject) {

        let Target = EventObject.target;
        let BackgroundImage = $(Target).css("background-image");

        let PopupImage = $(".popup-image");
        let ImageSource = BackgroundImage.replace('url("', '').replace('")', '');

        PopupImage.attr("src", ImageSource);

        $(".image-popup-container").addClass("show");

        console.log($(Target).css("background-image"));
    });


    $('.image-popup-bg').on('click', function (EventObject) {
        console.log("here");
        $(".image-popup-container").removeClass("show");
    });


    $('.popup-exit').on('click', function (EventObject) {
        console.log("here");
        $(".image-popup-container").removeClass("show");
    });

});
