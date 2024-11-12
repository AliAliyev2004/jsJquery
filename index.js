$(document).ready(function() {
    
    const images = [
        "https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
        "https://wallpapers.com/images/hd/sunset-reflections-on-water-67chk9m20bq6r4u2.jpg",
        "https://wallpapersok.com/images/featured/1080p-1519g7y2yexhnyvl.jpg",
        "https://wallpapercave.com/wp/dDX1LoE.jpg",
        "https://wallpapers.com/images/hd/1080p-pictures-a0ut5fl91owe5fp8.jpg",
        "https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg"
    ];
    let currentIndex = 0; //current index

    // show image
    function showImage(index) {
        $("#sliderImage").attr("src", images[index]);
        $(".thumbnail").removeClass("active");
        $(`.thumbnail[data-index=${index}]`).addClass("active");
    }

    // next 
    $("#next").click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // prev
    $("#prev").click(function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    //first
    showImage(currentIndex);

   
    $(".thumbnail").click(function() {
        currentIndex = $(this).data("index");
        showImage(currentIndex);
    });
});
