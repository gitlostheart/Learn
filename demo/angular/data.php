<?php
var_dump($_POST);
echo "----------"."<br>";
p($_POST);

function p($data){
	echo "<pre>".print_r($data,true)."</pre>";
}