<?php
error_reporting(E_ALL & ~E_NOTICE);
$username=$password=$confirm=$truename=$gender=$birthdate=$identity=$doctype=$docnum=$photo=$location=$address=$email=$mphone=$prisoner=$prsdoctype=$prsdocnum=$prison=$relation=$time=$hour=$minute=$meet=$reason=$accompany="";

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
$data["identity"]=test_input($_POST["identity"]);
$data["doctype"]=test_input($_POST["doctype"]);
$data["docnum"]=test_input($_POST["docnum"]);
$data["photo"]=test_input($_POST["photo"]);
$data["location"]=test_input($_POST["location"]);
$data["address"]=test_input($_POST["address"]);
$data["email"]=test_input($_POST["email"]);
$data["mphone"]=test_input($_POST["mphone"]);
$data["prisoner"]=test_input($_POST["prisoner"]);
$data["prsdoctype"]=test_input($_POST["prsdoctype"]);
$data["prsdocnum"]=test_input($_POST["prsdocnum"]);
$data["prison"]=test_input($_POST["prison"]);
$data["relation"]=test_input($_POST["relation"]);
$data["time"]=test_input($_POST["time"]);
$data["hour"]=test_input($_POST["hour"]);
$data["minute"]=test_input($_POST["minute"]);
$data["meet"]=test_input($_POST["meet"]);
$data["reason"]=test_input($_POST["reason"]);
$data["accompany"]=test_input($_POST["accompany"]);

echo json_encode($data);


?>
