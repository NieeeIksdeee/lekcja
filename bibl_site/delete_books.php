<?php
    require("conn.php");
    $sql = "SELECT id_titles FROM bibl_books WHERE id_books=$_POST[delete_books];";
    $result = $conn->query($sql);
    while($row=$result->fetch_assoc()){
        $title=$row['id_titles'];
    }

    $sql1 = "DELETE FROM `bibl_books` WHERE id_books = $_POST[delete_books];";
    $result1 = $conn->query($sql1);

    $sql2 = "DELETE FROM `bibl_titles` WHERE id_titles = $title;";
    $result2 = $conn->query($sql2);

    header("Location: ksiazki.php");
?>