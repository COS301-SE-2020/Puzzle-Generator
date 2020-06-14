<?php


  if (isset($_POST['submit'])) {
    // Check if name has been entered
    if (empty($_POST['user'])) {
        $errName = 'Please enter your user name';
    }
    // Check if email has been entered and is valid
    else if (empty($_POST['email'])) {
        $errEmail = 'Please enter a valid email address';
    }
    // check if a password has been entered and if it is a valid password
    else if (empty($_POST['password']) || (preg_match("/^.*(?=.{8,})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/", $_POST["password"]) === 0)) {
        $errPass = '<p class="errText">Password must be at least 8 characters and must contain at least one lower case letter, one upper case letter and one digit</p>';
    }
    else {
        echo "The form has been submitted";
        alert("here");
        session_start();
        $data = array("username" => $_POST['email'], "password" => $_POST['password']);
        $data_string = json_encode($data);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://127.0.0.1:443/posts");
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($data_string))
        );

        echo curl_exec($ch)."\n";
        curl_close($ch);
    }
}
 ?>
