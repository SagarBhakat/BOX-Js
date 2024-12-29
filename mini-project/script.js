var rectangle = document.querySelector("#center");
rectangle.addEventListener("mousemove", function(event) {

    var rangle_location = rectangle.getBoundingClientRect(); //this method is part of DOM and is used to find the values of x&y axis, height,width,top,bottom,left, right

    var insideRect = event.clientX - Math.round(rangle_location.left);
    if (insideRect < rangle_location.width / 2) {
        var redColor = gsap.utils.mapRange(0, rangle_location.width / 2, 255, 0, insideRect);
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })
    } else {
        var bluecolor = gsap.utils.mapRange(rangle_location.width / 2, rangle_location.width, 0, 255, insideRect);
        gsap.to(rectangle, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,


        })



    }

})

rectangle.addEventListener("mouseleave", function() {
    gsap.to(rectangle, {
        backgroundColor: "white"
    })

})