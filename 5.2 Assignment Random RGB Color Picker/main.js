$(document).ready(function () {
    $("#button").click(function () {
        let RGBvalues = randomRGBcolor();

        //RGB Array
        let rgbcolor =
        "rgb(" + RGBvalues[0] + ", " + RGBvalues[1] + ", " + RGBvalues[2] + ")";

        //Set Background
        $("body").css("background-color", rgbcolor);

        // Show the color name
        $("#color").text(rgbcolor);
    });
  });

  //Random number
  function randomNumber() {
    return Math.floor(Math.random() * 256);
  }

  // Randpm RGB
  function randomRGBcolor() {
    let red = randomNumber();
    let green = randomNumber();
    let blue = randomNumber();
    return [red, green, blue];
  }

  

  
  
 
