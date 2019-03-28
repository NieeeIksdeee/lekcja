<?php
$hn = "172.16.131.125";
$un = "z_cxz";
$pss = "bvc";
$dbn = "z_cxz";

$conn = new mysqli($hn, $un, $pss, $dbn);
$sql = "INSERT INTO `bibl_autor` (`id_autor`, `autor`) VALUES (NULL, '$_POST[imie]');";
$result = mysqli_query($conn,$sql);
header("location:index.php");
?>