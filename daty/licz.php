<?php
    require("../lib/connect.php");
    $zap = "select from_days(datediff(curdate(),'".$_POST["data"]."')) as result;";
    $result = mysqli_query($conn, $zap);
    $col = mysqli_fetch_assoc($result);
    echo($col["result"]." lat od dziś<br>");
?>