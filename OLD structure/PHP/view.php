<?php
  header("Access-Control-Allow-Origin:*");
?>
<!DOCTYPE html>
<html>
  <head>
  <title>Prometheus's Puzzles - Home</title>
  <meta name="description" content="Prometheus's Puzzles is an interactive puzzle generator for tile puzzles. ">
  <meta name="keywords" content="Puzzles, Tile puzzle, AI">
  <meta name="author" content="Team Prometheus">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="../CSS/style.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<body>
    <div class="row" style="margin:auto">
      <img class="col-6" src="../IMAGES/Logo.jpg" width="100%" height="100%">
    </div>
    <div class="row center sticky-top">
      <nav class="col-12 navbar navbar-expand navbar-dark justify-content-center" style="background-color: #7C593A ">
        <ul class="navbar-nav">
          <li class="nav-item mr-4 ml-4"><strong>
            <a class="nav-link" href="../index.php">Home</a></strong>
          </li>
          <li class="nav-item mr-4"><strong>
            <a class="nav-link" href="create.php">Create</a></strong>
          </li>
          <li class="nav-item mr-4"><strong>
            <a class="nav-link active" href="view.php">View</a></strong>
          </li>
        </ul>
      </nav>
    </div>
  <script type="text/javascript">
    $(document).ready(function() {
      let mainBody = $("#mainBody");
      function createElementClass(type, className, data)
      {
        return "<" + type + " class='" + className + "'>" + data + "</" + type + ">";
      }

      function createElementClassWithAttribute(type, className, data, attribute, attributeValue)
      {
        return "<" + type + " " + attribute + "=" + attributeValue + " class='" + className + "'>" + data + "</" + type + ">";
      }

      function view(puzzleId, puzzleTitle)
      {
        window.location.href = "http://localhost/Puzzle-Generator-website-ratings/PHP/rate.php/?puzzleId=" + puzzleId + "&puzzleTitle=" + puzzleTitle;
      }

      $.get('http://localhost:3200/api/getRatings', function(data){
        console.log(data);
        let results = data;

        for(let index = 0; index < results.length; index++)
        {
          let puzzlePicture = '<img class="card-img-top" src="../IMAGES/' + results[index].title + '.jpg" alt="alt_image">';
          let puzzleTitle = createElementClass('div', 'card-title', '<h4>' + results[index].title + '</h4><p>#' + results[index].puzzleId + '</p>');
          let puzzleRating = createElementClass('p', 'card-text', 'Rating: ' + results[index].rating + '/5.0');
          let buttonFunction = "'view(" + results[index].puzzleId + "," + results[index].title + ")'";
          // let puzzleButton  = createElementClassWithAttribute('button', 'btn btn-primary', 'Rate', 'onclick', buttonFunction);
          let puzzleButton = createElementClass('button', 'btn btn-primary rate-button', 'Rate');
          let cardBody = createElementClass('div', 'card-body', puzzleTitle + puzzleRating + puzzleButton);
          let card = createElementClass('div', 'card col-sm-3', puzzlePicture + cardBody);
          mainBody.append(card);
        }

        $('.rate-button').click(function(){
        	let p = $(this).siblings('div').children('p');
        	console.log(p[0].innerHTML[0]);
        });
      });
      //$(document).ready(function(){
        // $.ajax({
        //   url:"http://localhost:3200/api/getRatings/",
        //   type:"GET",
        //   headers: {"Content-Type": "application/json"},
        //   contentType: "application/json",
        //   success:function(response){
        //     console.log(response);
        //   }
        // });
     // });

      //REMEMBER THIS LINK
      // xhttp.open('GET', 'http://localhost:3200/api/getRatings', true);
      // xhttp.send();
    });
  </script>

	<div class="card-columns row container my-3 mx-auto" id="mainBody">

	</div>

</body>

</html>