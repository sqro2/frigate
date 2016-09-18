# frigate
Frigate is a jquery based html preprocessor which helps write html faster with much less code,time,effort.

#installation
Include jquery(latest dist recommended ).</br>
Include the file 'frigate.min.js'.

#Usage
<pre>
$(selector).toHtml(function(result){
    $(codearea).html(data);
})
</pre>

#example 
<b>Html</b>
<pre>
  &#x3C;textarea rows=6 col=12 id=&#x27;input-data&#x27;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;input type =&#x27;button&#x27; id=&#x27;button-process&#x27;&#x3E;Process&#x3C;/button&#x3E;
  &#x3C;div id=&#x27;output-data&#x27;&#x3E;&#x3C;/div&#x3E;
</pre>

<b>Jquery</b>
<pre>
   $('#input-data').toHtml(function(result){
       $('#output-data').html(result);
   })
</pre>
