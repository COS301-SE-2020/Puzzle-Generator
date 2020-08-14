class Internet{
  get pageHeadline() { return $('h1')}
  get subheading() {return $('h2')}
  get parent() {return $('div.flex-container')}
  get childElements() {return this.parent.$$('div')}
  get loginLink() {return $('a.mat-focus-indicator indexBtn mat-button mat-button-base')}
  specificChildElement(index){return this.parent.$(`div.flex-container:nth-child(${index})`)}
  get username() {return $()}

  clickOnLink(){
    if(this.loginLink.isDisplayed() === true){
      this.loginLink.click()
    }
    browser.pause(5000)
  }
  getDivText() {
    console.log(this.loginLink.isDisplayed() === true)
    this.childElements.filter((element) =>{
      console.log(element.getText())
    })
  }
  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed()
    console.log(this.specificChildElement(index).getText())
    return (this.specificChildElement(index).getText())
  }
  /**
  *Clicks on link based on the index provided
  * @param {Number} index the index to click
  */

}
module.exports = new Internet()
