$(document).ready(function(){
    $("#one").click(function(){
        $(".design").toggle();
    })
})
$(document).ready(function(){
    $(".design").click(function(){
        $("#one").toggle();
    })
})
$(document).ready(function(){
    $("#two").click(function(){
        $(".development").toggle();
    })
})
$(document).ready(function(){
    $(".development").click(function(){
        $("#two").toggle();
    })
})
$(document).ready(function(){
    $("#three").click(function(){
        $(".product").toggle();
        // $("#three").toggle();
    })
})
$(document).ready(function(){
    $(".product").click(function(){
        $("#three").toggle();
    })
})

$(document).ready(function(){
    $(".img").hover(function(){
        $(".image-caption",this).slideToggle("slow");
    })
})

