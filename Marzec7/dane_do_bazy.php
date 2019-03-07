<?php
require("connect.php");
$imie = $_POST["imie"];
$zarobki = $_POST["zarobki"];

echo $imie, $zarobki;

$sql = "INSERT INTO `pracownicy`
(`id_pracownicy`, `imie`, `dzial`, `zarobki`, `data_urodzenia`)
VALUES (NULL, '$imie', '2', '$zarobki', '2019-03-19');";
echo("<li> $sql")

$conn->close();

?>