<html>
 <head>
  <link rel="stylesheet" href="main.css"> 
  <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/> 
  <title>GamePowerX | Home</title>
 </head>
 <body>
    
    <form method="post">    
    <input type="submit" id="hash" name="hash" value="Hash">
    <input type="submit" id="register" name="register" value="Register">
    <input type="submit" id="login" name="login" value="Login">
    </form>
    <?php
      if(array_key_exists('hash', $_POST)){
        header('Location: hash');
        exit();
      }elseif(array_key_exists('register', $_POST)){
        header("Location: register.php");
        exit();
      }elseif(array_key_exists('login', $_POST)){
        header("Location: login.php");
        exit();
      }
    ?>
  <br>
  <?php echo'<p style="font-family: Arial, Helvetica, sans-serif;">Hello World</p>';?>
 </body>
</html>