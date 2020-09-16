module.exports = {
  success:function (){
    return "<!DOCTYPE html>\n" +
      "<html lang=\"en\">\n" +
      "<head>\n" +
      "  <meta charset=\"UTF-8\">\n" +
      "  <title>Account verified</title>\n" +
      "  <style>\n" +
      "\n" +
      "    div{\n" +
      "      border-radius: 15px;\n" +
      "      border-width: 2px;\n" +
      "      border-style: solid;\n" +
      "      border-color: #ffff;\n" +
      "      background-color: #ffffff;\n" +
      "\n" +
      "      display:block;\n" +
      "      position: relative;\n" +
      "      margin: auto;\n" +
      "      width: 45%;\n" +
      "      top:70px;\n" +
      "\n" +
      "      padding: 15px;\n" +
      "      box-shadow:0px 0px 15px 0px #23b582;\n" +
      "\n" +
      "      text-align: center;\n" +
      "      font-size: 130%;\n" +
      "\n" +
      "    }\n" +
      "\n" +
      "    button{\n" +
      "      background-color: #009B77;\n" +
      "      font-size: 80%;\n" +
      "      font-family: Verdana;\n" +
      "\n" +
      "      color: white;\n" +
      "      border: 0;\n" +
      "      border-radius: 10px;\n" +
      "      padding: 5px 10px 10px 10px;\n" +
      "      width:5em\n" +
      "\n" +
      "    }\n" +
      "    button:hover{\n" +
      "      text-decoration: underline;\n" +
      "      text-decoration-thickness:auto;\n" +
      "      text-decoration-color: gold;\n" +
      "      box-shadow: 3px 3px 11px grey;\n" +
      "      color: lightgoldenrodyellow\n" +
      "    }\n" +
      "    body{\n" +
      "      background-color: #eeeeee;\n" +
      "      font-family: Verdana;\n" +
      "    }\n" +
      "\n" +
      "    h1{\n" +
      "      font-size:104%\n" +
      "    }\n" +
      "\n" +
      "  </style>\n" +
      "</head>\n" +
      "<body>\n" +
      "<div>\n" +
      "  <h1>Your account has been successfully verified!</h1>\n" +
      "  <p>Please click the button below to login</p>\n" +
      "  <button href=\"https://prometheuspuzzles.herokuapp.com/login/\">LOGIN</button>\n" +
      "</div>\n" +
      "\n" +
      "</body>\n" +
      "</html>\n"
  },
  alreadyVerified:function(){
    return "<!DOCTYPE html>\n" +
      "<html lang=\"en\">\n" +
      "<head>\n" +
      "  <meta charset=\"UTF-8\">\n" +
      "  <title>Account already verified</title>\n" +
      "  <style>\n" +
      "\n" +
      "    div{\n" +
      "      border-radius: 15px;\n" +
      "      border-width: 2px;\n" +
      "      border-style: solid;\n" +
      "      border-color: #ffff;\n" +
      "      background-color: #ffffff;\n" +
      "\n" +
      "      display:block;\n" +
      "      position: relative;\n" +
      "      margin: auto;\n" +
      "      width: 45%;\n" +
      "      top:70px;\n" +
      "\n" +
      "      padding: 15px;\n" +
      "      box-shadow:0px 0px 15px 0px #23b582;\n" +
      "\n" +
      "      text-align: center;\n" +
      "      font-size: 130%;\n" +
      "\n" +
      "    }\n" +
      "\n" +
      "    button{\n" +
      "      background-color: #009B77;\n" +
      "      font-size: 80%;\n" +
      "      font-family: Verdana;\n" +
      "\n" +
      "      color: white;\n" +
      "      border: 0;\n" +
      "      border-radius: 10px;\n" +
      "      padding: 5px 10px 10px 10px;\n" +
      "      width:5em\n" +
      "\n" +
      "    }\n" +
      "    button:hover{\n" +
      "      text-decoration: underline;\n" +
      "      text-decoration-thickness:auto;\n" +
      "      text-decoration-color: gold;\n" +
      "      box-shadow: 3px 3px 11px grey;\n" +
      "      color: lightgoldenrodyellow\n" +
      "    }\n" +
      "    body{\n" +
      "      background-color: #eeeeee;\n" +
      "      font-family: Verdana;\n" +
      "    }\n" +
      "\n" +
      "    h1{\n" +
      "      font-size:104%\n" +
      "    }\n" +
      "\n" +
      "  </style>\n" +
      "</head>\n" +
      "<body>\n" +
      "<div>\n" +
      "  <h1>Your account has already been verified!</h1>\n" +
      "  <p>Please click the button below to login</p>\n" +
      "  <button href=\"https://prometheuspuzzles.herokuapp.com/login/\">LOGIN</button>\n" +
      "</div>\n" +
      "\n" +
      "</body>\n" +
      "</html>\n"
  }
}
