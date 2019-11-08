<?php
    require("conn.php");

    $sql = "DELETE FROM `bibl_authors` WHERE id_authors = $_POST[delete_authors];";
    $result = $conn->query($sql);
    header("Location: autorzy.php");
?>