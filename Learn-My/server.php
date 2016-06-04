<?php
	if($_POST){
		$data=$_POST;
	}else{
		$data=$_GET;
	}
	
	echo json_encode(array(
		'status'=>"1",
		'data'=>array(
			'name'=>$data['username'],
			'password'=>$data['password']
		)
	));die;