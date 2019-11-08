<?php
    require('conn.php');
    
    
    $sql = "INSERT INTO `bibl_authors` (`id_authors`, `name`) VALUES (NULL, '$_POST[author]')";
    $result = $conn->query($sql);

    header('Location: autorzy.php');
    
 
?>