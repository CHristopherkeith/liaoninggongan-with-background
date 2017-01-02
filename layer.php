<?php
error_reporting(E_ALL & ~E_NOTICE);
$username=$password=$confirm=$truename=$gender=$birthdate=$doctype=$docnum=$institution=$id=$qualification=$docdate=$photo=$location=$address=$mphone=$tel=$prisoner=$prsdoctype=$prsdocnum=$prison=$relation=$time=$hour=$minute=$duration=$mandator=$rdatrztype=$atrzphoto=$letterphoto=$notification=$translate=$internship="";

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

$data=array();

$data["username"]=test_input($_POST["username"]);
$data["password"]=test_input($_POST["password"]);
$data["confirm"]=test_input($_POST["confirm"]);
$data["truename"]=test_input($_POST["truename"]);
$data["gender"]=test_input($_POST["gender"]);
$data["birthdate"]=test_input($_POST["birthdate"]);
$data["doctype"]=test_input($_POST["doctype"]);
$data["docnum"]=test_input($_POST["docnum"]);
$data["institution"]=test_input($_POST["institution"]);
$data["id"]=test_input($_POST["id"]);
$data["qualification"]=test_input($_POST["qualification"]);
$data["docdate"]=test_input($_POST["docdate"]);
$data["photo"]=test_input($_POST["photo"]);
$data["location"]=test_input($_POST["location"]);
$data["address"]=test_input($_POST["address"]);
$data["mphone"]=test_input($_POST["mphone"]);
$data["tel"]=test_input($_POST["tel"]);
$data["prisoner"]=test_input($_POST["prisoner"]);
$data["prsdoctype"]=test_input($_POST["prsdoctype"]);
$data["prsdocnum"]=test_input($_POST["prsdocnum"]);
$data["prison"]=test_input($_POST["prison"]);
$data["relation"]=test_input($_POST["relation"]);
$data["time"]=test_input($_POST["time"]);
$data["hour"]=test_input($_POST["hour"]);
$data["minute"]=test_input($_POST["minute"]);
$data["duration"]=test_input($_POST["duration"]);
$data["mandator"]=test_input($_POST["mandator"]);
$data["rdatrztype"]=test_input($_POST["rdatrztype"]);
$data["atrzphoto"]=test_input($_POST["atrzphoto"]);
$data["letterphoto"]=test_input($_POST["letterphoto"]);
$data["notification"]=test_input($_POST["notification"]);
$data["translate"]=test_input($_POST["translate"]);
$data["internship"]=test_input($_POST["internship"]);

echo json_encode($data);

?>
