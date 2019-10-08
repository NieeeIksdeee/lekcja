<?php
require("connect.php");

$haslo = md5($_POST['passwordi']);
$sql = "INSERT INTO `users` (`id_user`, `login`, `password`, `id_rola`) VALUES (NULL, '$_POST[logini]', '$haslo', '0');";
$result = mysqli_query($conn,$sql);
header("location:plik2.php");
?>