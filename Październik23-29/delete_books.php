<?php
    require("conn.php");

    $sql = "DELETE FROM `bibl_books` WHERE id_books = $_POST[delete_books];";
    $result = $conn->query($sql);
    header("Location: ksiazki.php");
?>