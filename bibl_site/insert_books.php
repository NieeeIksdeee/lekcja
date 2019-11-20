<?php
    require('conn.php');
    
    $sql = "INSERT INTO `bibl_titles` (`id_titles`, `title`) VALUES (NULL, '".$_POST["title"]."')";
    $result = $conn->query($sql);

    $sql2 = "SELECT `id_titles`, `title` FROM `bibl_titles` order by id_titles DESC limit 1";
    $result2 = $conn->query($sql2);

    while($row = $result2->fetch_assoc()){
        $title = $row['id_titles'];
    }
    echo($title);
    echo($_POST['author']);
    $sql3 = "INSERT INTO `bibl_books` (`id_books`, `id_authors`,`id_titles`, `Status`) VALUES (NULL, '".$_POST["author"]."','$title','1')";
    $result3 = $conn->query($sql3);

    
    header("Location: ksiazki.php");
 
?>