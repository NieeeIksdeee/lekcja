<?php
require("conn.php");


$sql = "DELETE FROM `bibl_checkouts` WHERE id_checkouts = $_POST[delete];";
$result = $conn->query($sql);
header("Location: wypozyczenia.php");
?>