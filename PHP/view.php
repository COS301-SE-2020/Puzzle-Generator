<!DOCTYPE html>
<html>

<head>
  <title>Prometheus's Puzzles - View</title>
  <meta name="description" content="Prometheus's Puzzles is an interactive puzzle generator for tile puzzles. ">
  <meta name="keywords" content="Puzzles, Tile puzzle, AI">
  <meta name="author" content="Team Prometheus">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="../CSS/style.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
  <script type="text/javascript">
    $(document).ready(function() {
      let mainBody = $("#mainBody");
      let results = [];
      results["entries"] = [
        {
          title:"circle",
          rating:"1.0"
        },
        {
          title:"square",
          rating:"2.0"
        },
        {
          title:"triangle",
          rating:"3.0"
        },
        {
          title:"circle",
          rating:"1.0"
        },
        {
          title:"square",
          rating:"2.0"
        },
        {
          title:"triangle",
          rating:"3.0"
        }
      ];
      function createElementClass(type, className, data)
      {
        return "<" + type + " class='" + className + "'>" + data + "</" + type + ">";
      }

      function createElementClassWithAttribute(type, className, data, attribute, attributeValue)
      {
        return "<" + type + attribute + "='" + attributeValue + "' class='" + className + "'>" + data + "</" + type + ">";
      }

      let xhttp = new XMLHttpRequest();

     // xhttp.onreadystatechange = function(response) 
      {
        for(let index = 0; index < results.entries.length; index++)
        {
          let puzzlePicture = '<img class="card-img-top" src="../IMAGES/' + results.entries[index].title + '.jpg" alt="alt_image">';
          let puzzleTitle = createElementClass('h4', 'card-title', '<a>' + results.entries[index].title + '</a>');
          let puzzleRating = createElementClass('p', 'card-text', 'Rating: ' + results.entries[index].rating + '/5.0');
          let puzzleButton  = createElementClass('a', 'btn btn-primary', 'View', 'href', '');
          let cardBody = createElementClass('div', 'card-body', puzzleTitle + puzzleRating + puzzleButton);
          let card = createElementClass('div', 'card col-sm-3', puzzlePicture + cardBody);
          mainBody.append(card);
        }
      }

      //REMEMBER THIS LINK
      // xhttp.open('GET', 'localhost:8080/index.js/?');
      // xhttp.send();
    });
  </script>
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

    <div class="card-columns row container my-3 mx-auto" id="mainBody">

    </div>

</body>

</html>
