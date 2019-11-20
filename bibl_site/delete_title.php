<?php
    require("conn.php");

    $sql = "DELETE FROM `bibl_titles` WHERE id_titles = $_POST[delete_title];";
    $result = $conn->query($sql);
    header("Location: tytuły.php");
?>