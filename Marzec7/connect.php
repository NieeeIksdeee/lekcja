<?php
$servername = "172.16.131.125";
$username = "02_pelka";
$password = "kasztany12";
$dbname = "02_pelka";

// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error."<br><br>");
} 
// echo "Connected successfully<br><br>";
?>