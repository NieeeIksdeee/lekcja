<?php
$servername = "172.16.131.125";
$username = "02_belica";
$password = "6FY6fz9K";
$database = "02_belica";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";
?> 