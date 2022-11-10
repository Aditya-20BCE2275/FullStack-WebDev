// Full toggle
$(".title").click(function () {
    if ($(".tog").css("visibility") == "hidden") {
        $(".tog").css("visibility", "visible");
    }
    else
        $(".tog").css("visibility", "hidden");
});

//Author toggle
$(".autht").click(() => {
    if ($(".ath").css("visibility") == "hidden") {
        $(".ath").css("visibility", "visible");
    }
    else
        $(".ath").css("visibility", "hidden");
});

// Full toggle
$("p:first-child").click(()=>{
    if($("p:first-child").css("visibility") == "hidden")
    {
        $("p:first-child").css("visibility", "visible");
    }
});