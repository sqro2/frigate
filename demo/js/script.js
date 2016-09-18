$(document).ready(function(){
	$('#btn-process').click(function(){
		    //f('code-str').process();
			$('.code-str').toHtml(function(something){
				   $('.code-space').html(something);
				});
				
			//alert('something is working at least');
		});
	
})