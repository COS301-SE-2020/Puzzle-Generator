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

      $name = $_POST['user'];
      $email = $_POST['email'];
      $sql_n = "SELECT * FROM USERS WHERE name='$name'";
    	$sql_e = "SELECT * FROM USERS WHERE email='$email'";

       $res_n = pg_query($db, $sql_n);
       $res_e = pg_query($db, $sql_e);

       if($res_n == false)
       {
         response(false, "Connection error");
         exit();
       }
       if($res_e == false)
       {
         response(false, "Connection error");
         exit();
       }

     	if (pg_num_rows($res_n) > 0){

     	  $name_error = "Sorry... name already taken";
         echo $name_error;

     	}else if(pg_num_rows($res_e) > 0){
     	  $email_error = "Sorry... email already taken";
         echo $email_error;
     	}
       else{
              /*$options = [
                'salt' => generate_salt(),
                'cost' => 12
              ];
              $hash = password_hash($password, PASSWORD_DEFAULT, $options);*/
              $pass = $_POST['password'];
              $num = date();
              $API_key = generate_APIkey();
              $query = "INSERT INTO USERS (userId, name, email, password)
         	    	  VALUES ('$num', '$name', '$email', '$pass')";
              if($db == false)
              {
                response(false, "Connection error");
                exit();
              }
              $results = mysqli_query($db, $query);
              echo 'Saved!';
              exit();
     	}

        echo "You have successfully signed up.";
        session_start();
        $data = array("username" => $_POST['email'], "password" => $_POST['password'], "name" => $_POST['user']);
        $data_string = json_encode($data);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "/api/users/createUser");
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
