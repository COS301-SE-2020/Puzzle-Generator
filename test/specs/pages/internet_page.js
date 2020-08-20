class Internet{
  get pageHeadline() { return $('h1')}
  get subheading() {return $('h2')}
  get parent() {return $('div.flex-container')}
  get childElements() {return this.parent.$$('div')}

  getDivText() {
    this.childElements.filter((element) =>{
      console.log(element.getText())
    })
  }
}
module.exports = new Internet()
