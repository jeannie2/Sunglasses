var img = document.getElementById("image"); //sprite image is 1200 x 5760;
var y = 0; //1920; initialise y and assign start position 

img.style.backgroundPosition = "0px " + y + "px"; //initilaise. guess 0,0 is beginning of sprite (background image)

console.log("click!")
console.log("y:" + y);

img.addEventListener("click", function(){ /* event is an object if no event, keycode undefined */
        if (y < 5760) { ///* rather than i !== 14 -> altho wont go higher than 14, still more clear */
            y += 1920; //
           //47% of original size image files in old horserace (not sure if correct): 766.1px (47% of 1630), 524.99 px 
        } else {
           y = 1920; //y coordinate of first image, not 0
        }

img.style.backgroundPosition= "0px " + "-" + y + "px"; /* if omit -, reverses */
console.log("y:" + y);
//move whole sprite (background image) left by y amount to display 2nd image
//https://stackoverflow.com/questions/45943352/background-position-in-css-sprites-using-negative-values
});
 