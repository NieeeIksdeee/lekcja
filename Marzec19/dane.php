<?php
$imie = $_POST["imie"];
$dzial = $_POST["dzial"];
$zarobki =$_POST["zarobki"];
$data = $_POST["data"];


$hn = "172.16.131.125";
$us = "z_asd";
$ps = "poi";
$dbn = "z_asd";

$conn = new mysqli($hn,$us,$ps,$dbn);
$sql = "INSERT INTO `pracownicy` (`id_pracownicy`, `imie`, `dzial`, `zarobki`, `data_urodzenia`) VALUES (NULL, '$imie', '$dzial', '$zarobki', '$data');";
$result = mysqli_query($conn,$sql);
header("location: index.php");
?>
<a href="index.php">Wróc</a>