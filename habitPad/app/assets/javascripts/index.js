window.onload = function() {
 
    console.log( 'Hello World' );
    // echo 'Hello World';


 


	

	var add_repeat_switch = document.getElementById('add_repeat_switch');
	add_item.addEventListener("click",create_item);
	add_repeat_switch.addEventListener("click",create_repeat_switch);


}

// 繰り返す対象の項目を生成
function create_item(){
		var item = document.getElementById('item');
		html_content = 
		'<div id="repeat_switch_top">' +
		'<input type="text" name="">' +
		'<input type="button" name="" id="add_repeat_switch" onchange="create_repeat_switch">' +
		'</div>' +
		'<div id="repeat_switch_bottom">' +
		'<input type="checkbox" name="" id="checkbox">' +
		'<input type="text" name="">' +
		'</div>';
		item.insertAdjacentHTML('beforeend',html_content);
}

// 繰り返しボタンを生成
function create_repeat_switch(){
		var repeat_switch = document.getElementById('repeat_switch');
		repeat_switch.insertAdjacentHTML('beforeend','<div class="repeat_switch_copy"><input type="checkbox" name="" id="checkbox"><input type="text" name=""></div>');
}