var output = document.getElementById('input');
	var btn = document.getElementById('btn');
	function values(input) {
	        output.value+= input;	
	}
	function equal(){
		output.value = eval(output.value);
	}
	function clearAll(){
		output.value ="";
	}