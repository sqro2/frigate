//global variables declaration
 var i;
 var n;
 var p;
 var j;
 var $scope_id
 var $scope_state_current;
 var $index = 0;
 var $loop_index;
 var $multiplier = 0;
 var $scope_array = ['global'];
 var $current_scope_index_pointer = 0;
 var $lex_table_length = 0;
 var $current_lex_row;
 var $selector;
 //global functions 
 function scope_id(x){
			var s = "";
			while(s.length<x&&x>0){
				var r = Math.random();
				s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
			}
			return s;
}
function str_concat(input_str,loop_q){
	        var final_str = ' ';
	    for(j=0;j<loop_q;j++){
			  final_str = final_str+input_str;
			}
			return final_str;
}
function g_collect(){
			preprocessor.lex_table = null;
			preprocessor.lex_table = {};
			$index = 0;
			$loop_index =undefined;
			$multiplier = 0;
			$scope_array = ['global'];
			$current_scope_index_pointer = 0;
			$lex_table_length = 0;
			$current_lex_row=undefined;
			$code_gen.result.string_gen = '';	
}
    var $code_gen = {
	       init : function(){
			        for(p = 0; p < $lex_table_length; p++){
					       var lex_row = preprocessor.lex_table['row'+p];
						   var multiplier = lex_row.multiplier_c;
						   var void_pattern = lex_row.scope_c+'*';
						   var void_regex = lex_row.scope_c+'[*]';
						   var regex_pattern = new RegExp(void_regex,'g');
						   var string = '<'+lex_row.token_c+' '+'id='+'"'+lex_row.id+'"'+' '+'class='+'"'+lex_row.clss+'"'+'>'+lex_row.id_c+'*'+' '+'</'+lex_row.token_c+'>';
								      if(lex_row.scope_c === 'global'){
											  if(multiplier!==0){
											         var code_string = str_concat(string,multiplier)
												     this.result.string_gen = this.result.string_gen+code_string;
											   }else{
											         this.result.string_gen = this.result.string_gen+string;
											   }
									   }else{
									           if(multiplier!==0){
											        var code_string = str_concat(string,multiplier);
                                                    this.result.string_gen = (this.result.string_gen).replace(regex_pattern,code_string+void_pattern);
												   }else{
											         this.result.string_gen = (this.result.string_gen).replace(regex_pattern,string+void_pattern); 
										   }
								     }	
						} 
					return(this.fprocess(this.result.string_gen));
			   },
			result:{
				    string_gen : '',
				},
		    fprocess : function(str){
				               var final_string = str.replace(/>\w*\d*[*]/gi,'>');
						       var encoded_final_string = final_string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
                               g_collect();
							   return encoded_final_string;
				}
	   }
	var preprocessor = {
		    init : function(str){
		            var input_string_mod_pass_1 = str.replace(/\s\s*/g," ");		
				    var input_string_mod_pass_2 = input_string_mod_pass_1.replace(/\s*{\s*/gi," { ");
			        var input_string_mod_pass_3 = input_string_mod_pass_2.replace(/\s*}\s*/gi," } ");
			        var input_string_mod_pass_3_1 = input_string_mod_pass_3.replace(/\s*\)\s*/gi," ) ");
			        var input_string_mod_pass_3_2 = input_string_mod_pass_3_1.replace(/\s*\(\s*/gi," ( ");
					this.attr_stack.id_stack = input_string_mod_pass_3_2.match(/#(.*?)\s/gi);
					this.attr_stack.class_stack = input_string_mod_pass_3_2.match(/\.(.*?)\s/gi);
			        var input_string_mod_pass_3_3 = input_string_mod_pass_3_2.replace(/#(.*?)\s/gi," id ");
			        var input_string_mod_pass_3_4 = input_string_mod_pass_3_3.replace(/\.(.*?)\s/gi," class ");
			        var input_string_mod_pass_3_5 = input_string_mod_pass_3_4.replace(/\(|\)/gi,"");
			        var input_string_mod_pass_3_6 = input_string_mod_pass_3_5.replace(/#+|\.+/gi,"");
					var input_string_mod_pass_4 = input_string_mod_pass_3_6.replace(/\s*[*]\s*/gi," * ");
					var input_string_tokens = input_string_mod_pass_4.split(" ");
					var input_string_tokens_pass_1 = input_string_tokens.toString();
					var input_string_tokens_pass_2 = input_string_tokens_pass_1.replace(/,,/gi,',');
					var input_string_tokens_pass_3 = input_string_tokens_pass_2.split(',');
			         if(input_string_tokens_pass_3[input_string_tokens_pass_3.length-1] === ''){
						        input_string_tokens_pass_3.pop();
							   this.lex_table_init(input_string_tokens_pass_3);
							   return($code_gen.init());
						 }else{
						        this.lex_table_init(input_string_tokens_pass_3);
								return($code_gen.init());
						 }
				},
			lex_table_init : function(str){
				     for(i = 0; i<str.length; i++){
                           if((str[i].match(/^[0-9]+$/g))== null && str[i] !== ''){
								  if(str[i+1] !== undefined && str[i-1] !== undefined){
									    this.lex_table_constrc(str[i],str[i+1],str[i-1]);
									  }else{
									     this.lex_table_constrc(str[i],'null','null');
									  }
						   }
						 }
				},
			lex_table_constrc : function(token,token_next,token_prev){
				    switch(token){
						case '{' :
							$scope_array.push($scope_state_current);
				            $current_scope_index_pointer++;
						break;
						case '}' :
                            $current_scope_index_pointer--;
							$scope_array.pop();
						break;
						case '*' :
							if(token_next !== 'null' && token_next.match(/^[0-9]+$/g)){
								  $token_multiplier = parseInt(token_next);  
							       if(token_prev !== '}'){
									     this.lex_table[$current_lex_row].multiplier_c = $token_multiplier;
									   }
									   if(token_prev === '}'){
									     var current_scope = $scope_array[$current_scope_index_pointer];
						                  for(n = 0; n < $lex_table_length; n++){
											     if(this.lex_table['row'+n].scope_c === current_scope){
													   // 
													  var row = 'row'+n;
													 }
     									   }
											this.lex_table[row].multiplier_c = $token_multiplier;  
									   }
								}else{
								    alert('error in parsing multiplier');
								}
						break;
						case 'class' :
									     var current_scope = $scope_array[$current_scope_index_pointer];
						                  for(n = 0; n < $lex_table_length; n++){
											     if(this.lex_table['row'+n].scope_c === current_scope){
													  var row = 'row'+n;
													 }
     									   }
										   var class_str = this.attr_stack.class_stack.shift();
										   var class_str_1 = class_str.replace('.','');
										   this.lex_table[row].clss = class_str_1.replace(/\s*/gi,'');
							  break;
						case 'id' :
									     var current_scope = $scope_array[$current_scope_index_pointer];
						                  for(n = 0; n < $lex_table_length; n++){
											     if(this.lex_table['row'+n].scope_c === current_scope){
													  var row = 'row'+n;
													 }
     									   }
										   var id_str = this.attr_stack.id_stack.shift();
										   var id_str_1 = id_str.replace('#','');
										   this.lex_table[row].id = id_str_1.replace(/\s*/gi,'');
							  break;
						default:
							this.lex_table['row'+$index] = new Object();
							var $scope_id = scope_id(8);
							this.lex_table['row'+$index].id_c = $scope_id;
							this.lex_table['row'+$index].clss = 'null';
							this.lex_table['row'+$index].id = 'null';
							this.lex_table['row'+$index].token_c = token;
							this.lex_table['row'+$index].scope_c = $scope_array[$current_scope_index_pointer];
							this.lex_table['row'+$index].multiplier_c = $multiplier;
				            $current_lex_row = 'row'+$index;
							$index += 1;
							$lex_table_length +=1;
                            $scope_state_current = $scope_id;
						 break;
						}
				},
		lex_table : {},
		attr_stack : {}
		};
	   
	   (function($){
		   $.fn.toHtml = function(callback){
		               var input_str = this.val();
				       var result = preprocessor.init(input_str);
				       callback(result);
			   }
		   })(jQuery);