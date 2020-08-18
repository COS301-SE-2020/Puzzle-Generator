class Internet{
  get pageHeadline() { return $('h1')}
  get subheading() {return $('h2')}
  get parent() {return $('div.flex-container')}
  get childElements() {return this.parent.$$('div')}
  get loginLink() {return $('a.mat-focus-indicator indexBtn mat-button mat-button-base')}
  specificChildElement(index){return this.parent.$(`div.flex-container:nth-child(${index}) div`)}
  get username() {return $('#mat-input-0')}
  get password() {return $('#mat-input-1')}

  getDivText() {
    this.childElements.filter((element) =>{
      console.log(element.getText())
    })
  }
  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed()
    console.log(this.specificChildElement(index).getText())
    return (this.specificChildElement(index).getText())
  }
  enterUsername(text)
  {
    this.username.waitForDisplayed()
    this.username.setValue(text)
  }
  enterPassword(text)
  {
    this.password.waitForDisplayed()
    this.password.setValue(text)
  }
  figures(index){return $(`div.flex-container div.one:nth-child(${index}) div img`)}
  figureDetails(index){return $(`div.flex-container div.one:nth-child(${index}) div h3`)}
  /*
  * Hovers over the specific figure
  */

  hoverOnFigure(index){
    this.figures(index).waitForDisplayed()
    this.figures(index).moveTo(1,1)
  }

  getFiguresDetailsText(index){
    this.figureDetails(index).waitForDisplayed()
    return this.figureDetails(index).getText()
  }

  scrollToPageHeader(){
    this.pageHeadline.moveTo();
  }

  get columnA() { return $(`div.flex-container div.one:nth-child(${3}) div`)}
  get columnB() { return $(`div.flex-container div.one:nth-child(${2}) div`)}
  get dropDownMenu() { return $('.dropdown-menu dropdown dropdown-primary ng-star-inserted a-various-dropdown fadeInDropdown')}
  get dropDownMenuOption1() {return $('.dropdown-menu dropdown dropdown-primary ng-star-inserted a-various-dropdown fadeInDropdown a')}

  clickDropDownMenu(){
    this.dropDownMenu.waitForDisplayed()
    this.dropDownMenu.click()
  }

  clickDropDownMenuOption1(){
    this.dropDownMenuOption1.waitForDisplayed()
    this.dropDownMenuOption1.click()
  }

  dragColumnAToColumnB(){
    this.columnA.waitForDisplayed()
    this.columnB.dragAndDrop(this.columnB)
  }
  /**
  *Clicks on link based on the index provided
  * @param {Number} index the index to click
  */

}
module.exports = new Internet()
