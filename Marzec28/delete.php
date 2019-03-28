<?php
$hn = "172.16.131.125";
$un = "z_cxz";
$pss = "bvc";
$dbn = "z_cxz";

$conn = new mysqli($hn, $un, $pss, $dbn);
$sql = "DELETE FROM `bibl_wyp` WHERE id_wyp = $_POST[id];";
$result = mysqli_query($conn,$sql);
header("location:index.php");
?>