window.onload = function() {
 
    console.log( 'Hello World' );
    // echo 'Hello World';


 
}

function create_repeat_switch(){
	var repeat_switch = document.getElementById('repeat_switch');

	repeat_switch.insertAdjacentHTML('beforebegin','<div id="repeat_switch"><input type="checkbox" name="" id="checkbox"><input type="text" name=""></div>');

}

var add_repeat_switch = document.getElementById('add_repeat_switch');
console.log(add_repeat_switch);
add_repeat_switch.addEventListener("click",create_repeat_switch);