<?php
    require('conn.php');
    
    
    $sql = "INSERT INTO `bibl_titles` (`id_titles`, `title`) VALUES (NULL, '$_POST[title]')";
    $result = $conn->query($sql);

    header('Location: tytuły.php');
    
 
?>