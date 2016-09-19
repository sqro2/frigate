#What is frigate ?
Frigate is a jquery based html preprocessor which helps write html faster with much less code,time,effort.

#What problem it solves?
Writing pure HTML markup is tedious and kills a lot of development time. Frigate was created to simply make this process faster.

#Two quick example :
<p><b>Input :</b></p>
        div*6  
<p><b>Output</b></p>
  <pre>
		&#x3C;div id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/div&#x3E;
		&#x3C;div id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/div&#x3E;
		&#x3C;div id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/div&#x3E;
		&#x3C;div id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/div&#x3E;
		&#x3C;div id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/div&#x3E;
		&#x3C;div id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/div&#x3E;
  </pre>
 <hr> 
<p><b>Input :</b></p>
				
					header(.header-class #header-id){
						  nav(.nav-class #nav-id){
							   ul(.ul-class #ul-id){
								   li(.li-class #li-id){
									   a
									}*5
							   }*2
						  }
					}
			
<p><b>Output</b></p>
  <pre>
					&#x3C;header id=&#x22;header-id&#x22; class=&#x22;header-class&#x22;&#x3E;
					   &#x3C;nav id=&#x22;nav-id&#x22; class=&#x22;nav-class&#x22;&#x3E;
						  &#x3C;ul id=&#x22;ul-id&#x22; class=&#x22;ul-class&#x22;&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
						  &#x3C;/ul&#x3E;
						  &#x3C;ul id=&#x22;ul-id&#x22; class=&#x22;ul-class&#x22;&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
							 &#x3C;li id=&#x22;li-id&#x22; class=&#x22;li-class&#x22;&#x3E;
								&#x3C;a id=&#x22;null&#x22; class=&#x22;null&#x22;&#x3E; &#x3C;/a&#x3E;
							 &#x3C;/li&#x3E;
						  &#x3C;/ul&#x3E;
					   &#x3C;/nav&#x3E;
					&#x3C;/header&#x3E;
  </pre>
  
  
#installation
Include jquery to your project(latest dist recommended ).</br>
Include the file 'frigate.min.js'.

#Usage
Before using this preprocessor It's neccessary to  get familiar with it's syntax.Please visit <a href='http://www.htmlai.com/doc.html'>This page</a> for documentation.</br>
<b>How to implement</b>
<p>Html : </p>
<pre>
  &#x3C;textarea rows=&#x27;6&#x27; cols=&#x27;12&#x27; id=&#x27;input-data&#x27;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;input type =&#x27;button&#x27; id=&#x27;button-process&#x27;&#x3E;Process&#x3C;/button&#x3E;
  &#x3C;div id=&#x27;output-data&#x27;&#x3E;&#x3C;/div&#x3E;
</pre>

<p>Jquery : </p>
<pre>
   $('#input-data').toHtml(function(result){
       $('#output-data').html(result);
   })
</pre>
