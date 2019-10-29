<?php
    require('conn.php');
    
    
    $sql = "INSERT INTO `bibl_checkouts` (`id_checkouts`, `id_users`, `id_books`, `date_in`, `date_out`) VALUES (NULL, '$_POST[book]', '$_POST[user]', '$_POST[in]', '$_POST[out]')";
    $result = $conn -> query($sql);

    header('Location: wypozyczenia.php');
    
 
?>