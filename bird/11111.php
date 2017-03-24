<?php
	
header("Access-Control-Allow-Origin: *");
header('content-type:text/html;charest="utf-8"');

//<!--page 请求的页数       客户端      以get发送过来-->

 //<!--//每一行结束都要加分号，   不需要声明变量， 但变量之前必须加$-->

$page= $_GET["page"]; 


$array0 = array(
		"success"=>"成功",
		"data"=>array(
			"pageStart"=>0,
			"pageSize"=>6,
			"count"=>15,
			"list"=>array(
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
					"creatByFullName"=>"管理员",
					"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
					"title"=>"胜林三境重装出发",
					"sysId"=>1,
					"coverImg"=>"images/list_img01.jpg",
					"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"小鸟掌学开通国外渠道",
				"sysId"=>2,
				"coverImg"=>"images/list_img02.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"胜林三境天气app上线",
				"sysId"=>3,
				"coverImg"=>"images/list_img03.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"国外报道",
				"sysId"=>4,
				"coverImg"=>"images/list_img04.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"国外报道",
				"sysId"=>4,
				"coverImg"=>"images/list_img04.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"胜林三境天气app上线",
				"sysId"=>3,
				"coverImg"=>"images/list_img03.jpg",
				"status"=>2
			)
					
			)
		)
);

$array1 = array(
		"success"=>"成功",
		"data"=>array(
			"pageStart"=>0,
			"pageSize"=>6,
			"count"=>15,
			"list"=>array(
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
					"creatByFullName"=>"管理员",
					"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
					"title"=>"胜林三境重装出发",
					"sysId"=>1,
					"coverImg"=>"images/list_img01.jpg",
					"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"小鸟掌学开通国外渠道",
				"sysId"=>2,
				"coverImg"=>"images/list_img02.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"胜林三境天气app上线",
				"sysId"=>3,
				"coverImg"=>"images/list_img03.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"国外报道",
				"sysId"=>4,
				"coverImg"=>"images/list_img04.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"国外报道",
				"sysId"=>4,
				"coverImg"=>"images/list_img04.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"胜林三境天气app上线",
				"sysId"=>3,
				"coverImg"=>"images/list_img03.jpg",
				"status"=>2
			)
					
			)
		)
);

$array2 = array(
		"success"=>"成功",
		"data"=>array(
			"pageStart"=>0,
			"pageSize"=>6,
			"count"=>15,
			"list"=>array(
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
					"creatByFullName"=>"管理员",
					"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
					"title"=>"胜林三境重装出发",
					"sysId"=>1,
					"coverImg"=>"images/list_img01.jpg",
					"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"小鸟掌学开通国外渠道",
				"sysId"=>2,
				"coverImg"=>"images/list_img02.jpg",
				"status"=>2
			),
			array(
				"creatAt"=>"2016-02-03 15:23:56.0",
				"creatByFullName"=>"管理员",
				"describe"=>"小鸟掌学创建于2014年初，起源服务于四川省专业技术人员继续教育基地的在线培训平台",
				"title"=>"胜林三境天气app上线",
				"sysId"=>3,
				"coverImg"=>"images/list_img03.jpg",
				"status"=>2
			)
					
			)
		)
);


if($page == 0){
	echo json_encode($array0);
}else if($page == 1){
	echo json_encode($array1);
}else if($page == 2){
	echo json_encode($array2);
}else{
	echo json_encode(array('err'=>'没有数据了'));
}


?>
