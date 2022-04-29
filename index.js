$("h1").addClass("big-title")
// $("h1").text("hi")
// $("button").html("<em>damn</em>")
// $("a").attr("href","https://baidu.com/")

$("h1").click(function(){
    $("h1").css("color", "purple");
})


$("button").click(function(){
    $("h1").css("color", "purple");
})

// $("body").keypress(function(event){
//     console.log(event.key);
// })

// keybord listener.
$(document).keypress(function(event){
    $("h1").text(event.key);
})

// on function
$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
})

// add elements around another element.
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>"); 

// remove all elements
$("button").remove();