<?php
require("connect.php");
$sql = "SELECT * FROM pracownicy";
$result = mysqli_query($conn,$sql);
$array = [];

while ($row = mysqli_fetch_assoc($result))
{
    $array[] = $row;
}

$conn->close();

echo (json_encode($array));

// echo("test");
// echo($_POST["imie"]);
// echo($_POST["nazwisko"]);
?>
