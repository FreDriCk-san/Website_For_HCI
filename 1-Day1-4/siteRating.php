<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 25.10.2018
 * Time: 3:43
 */

if (isset($_REQUEST))
{
    $connection = mysqli_connect('localhost', 'FreDriCk', 'qwerty');
    if (!$connection){
        die('Connection error: ' . mysqli_error($connection));
    }

    mysqli_select_db($connection, 'SAO');

    $postData = file_get_contents('php://input');
    $data = json_decode($postData, true);

    $statement = $data["statement"];
    $upd_time = $data["upd_time"];

    $sql = "INSERT INTO Grades(statement, upd_time) VALUES ('$statement', '$upd_time')";
    $result = mysqli_query($connection, $sql);
    if ($result === false){
        echo ('ERROR ' . $result);
    }
    mysqli_close($connection);
}
