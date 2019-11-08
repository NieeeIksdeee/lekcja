<?php
    require('conn.php');
    
    
    $sql = "INSERT INTO `bibl_books` (`id_books`, `id_authors`,`id_titles`, `isbn`) VALUES (NULL, '$_POST[author]','$_POST[title]','')";
    $result = $conn->query($sql);

    header('Location: ksiazki.php');
    
 
?>