# Puzzle-Generator

# Links

## Website Link
*https://prometheuspuzzles.herokuapp.com/

## Documenation
* Demo One SRS Document:
https://www.overleaf.com/read/mwgctytsqcvq
* Demo Two SRS Document:
https://www.overleaf.com/read/qqzbxwhmwvxf
* Demo Three SRS Document:
https://www.overleaf.com/read/ckqdjjskrhpr
* Demo Four SRS Document:
--
* User manual for the website:
https://www.overleaf.com/read/hkvxmjmcfhcq 
* Technical Installation Manual:
 https://www.overleaf.com/read/zhgbzhfdwmbt


## Project Management Tool
* Clickup:
https://share.clickup.com/b/h/4-2672456-2/8ce32a2cd3801b0

## Members LinkedIn Profile Links
* Charlotte Jacobs:
https://www.linkedin.com/in/charlotte-jacobs-b1558216b/

* Jaynill Gopal:
http://www.linkedin.com/in/jaynill-gopal-5b32381a4

* Tapiwa Mazibuko:
https://www.linkedin.com/in/tapiwa-m-066326120

* Tsholofelo Gomba:
https://www.linkedin.com/in/tsholofelo-gomba-8189b712b

* Yuval Langa:
https://www.linkedin.com/in/yuval-langa-27ab251ab/

# Profile Descriptions
### Charlotte Jacobs 
u15165622
* Charlotte was responsible for the Angular website functionality.
* https://charley817.github.io

### Jaynill Gopal 
u15175295
* Jaynill was responsible for the deployment of the website and github branching.
* https://jaynillg.github.io

### Tapiwa Mazibuko 
u18203541
* Tapiwa was responsible for integration and unit testing
* https://tapiwamazibuko.github.io

### Tsholofelo Gomba
u17391718
* Tsholofelo was responsible for the Angular website and Node API functionality
* https://u173Tsholo.github.io

### Yuval Langa
u18174142
* Yuval is our team leader responsible for manual and AI puzzle functionality.
* https://glasses-kun.github.io/online-cv/




# PrometheusPuzzles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular File Structure 

We kept the file structure that Angular uses. 

### Main Folder

The parent directory consists of all our proxy files, package files, config files and our gitignore file - which consists of our node modules folder and other files git should ignore. It also has the src folder which consists of our whole website. 

### src folder

The src folder has the index.html file which is the main file that gets called when our website is running. The src folder also has the assets folder and the app folder. 

### assets folder 

The assets folder consists of all our images, fonts and our js files used for the manual creation. 

### app folder

The app folder has the app component and the routing component. It also has the following folders: models, services, pages, navbar and rate-dialog. The navbar and rate-dialog is used throughout our website and that is why they have seperate components on this directory. 

### models folder

The models folder is used for the puzzles, puzzleRatings and users to provide a model that we can use throughout the website. 

### services folder 

The services folder consists of our the service that interacts with our API. 

### pages folder 

We use the pages folder for all the pages components of our website. Each folder inside the pages folder uses the same file structure - we have the .html file for all the html of the page, then we have the .css file that consists of the styles for that specific page, we also have the .ts file that consists of the functions and we have the spec.ts file that will be used for unit testing. 

