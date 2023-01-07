<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="icon" type="image/png" href="./Favicons/LockKey-16x16.png">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="login.css">
  <script defer src="login.js"></script>
</head>

<body>
  <main id="main-holder">
    <h1 id="login-header">Welcome!</h1>
    <img src='https://github.com/CozmoKitten/CozmoKitten.github.io/blob/main/ImageAssets./pngfind.com-lock-png-545032.png?raw=true' alt="An image of a lock and key" width="200" height="200"> <img>
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
    
    <form id="login-form">
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
      <input type="submit" value="Login" id="login-form-submit">
    </form>
  
  </main>
</body>

</html>
