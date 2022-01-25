$(document).ready(function () {

    $('.image-preview').on('click', function (EventObject) {

        let Target = EventObject.target;
        let BackgroundImage = $(Target).css("background-image");

        let PopupImage = $(".popup-image");
        let ImageSource = BackgroundImage.replace('url("', '').replace('")', '');

        PopupImage.attr("src", ImageSource);

        $(".image-popup-container").addClass("show");

        function getMeta(url) {
            let img = new Image();
            img.onload = function() {
                if(this.width >= this.height){
                    $(".image-popup-container img").addClass("image-popup-wide");
                }else{
                    $(".image-popup-container img").addClass("image-popup-tall");
                }
            };
            img.src = url;
        }
        getMeta(ImageSource);

        // console.log("here");
        // console.log($(Target).css("background-image"));
    });


    $('.image-popup-bg').on('click', function (EventObject) {
        $(".image-popup-container").removeClass("show");
        $(".image-popup-container img").removeClass("image-popup-wide");
        $(".image-popup-container img").removeClass("image-popup-tall");
    });


    $('.popup-exit').on('click', function (EventObject) {
        $(".image-popup-container").removeClass("show");
        $(".image-popup-container img").removeClass("image-popup-wide");
        $(".image-popup-container img").removeClass("image-popup-tall");
    });

});
