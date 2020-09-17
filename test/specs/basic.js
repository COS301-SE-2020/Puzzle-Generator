const internetPage = require("./pages/internet_page")
const User = require('./models/User')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

describe('interacting with elements', function() {
  it("Get text for element", () => {
    browser.url('https://prometheuspuzzles.herokuapp.com/index')
    let text = $("img")
    //console.log(text)
    internetPage.getDivText()
    $(`img`).waitForDisplayed()
    //console.log($(`div.flex-container:nth-child(${3}) div`).getText())
    //return ($(`div.flex-container:nth-child(${3}) div`).getText())
  })
  it("is headline dispalayed", () =>{
    console.log(internetPage.pageHeadline.isDisplayed())
  })
  if('does the subheading exist', () =>{
    console.log(internetPage.subheading.isExisting())
  })
  it("is headline dispalayed in viewport", () =>{
    console.log(internetPage.pageHeadline.isDisplayedInViewport())
  })
})

describe('element actions', () => {
    it('should click element', () => {
        browser.url('https://prometheuspuzzles.herokuapp.com/index')
        if($('li#btnLink a').isDisplayed() === true){
          $(`li#btnLink:nth-child(${2}) a`).click()
          expect(browser.getUrl()).equals('https://prometheuspuzzles.herokuapp.com/login');
        }
        browser.pause(5000)

    })
    it('should get text', () => {
      browser.url('https://prometheuspuzzles.herokuapp.com/index')
      $(`div`).waitForDisplayed()
      //console.log($(`div.flex-container:nth-child(${3}) div`).getText())
      //expect($(`div.flex-container:nth-child(${3}) div`).getText().equals(' '))
    })
    it('should enter username', () => {
      browser.url('https://prometheuspuzzles.herokuapp.com/login')
      $('#mat-input-0').waitForDisplayed()
      $('#mat-input-0').setValue('charo@test.com')
      assert.equal('charo@test.com', $('#mat-input-0').getValue())
    })

    it('should create a user', () => {
      browser.url('https://prometheuspuzzles.herokuapp.com/signup')
      $('#mat-input-1').waitForDisplayed()
      $('#mat-input-0').setValue('Jenny Doe')
      $('#mat-input-1').setValue('jenny@doe.com')
      $('#mat-input-2').setValue('jennydoe')
      $('#mat-input-3').setValue('jennydoe')
      $('#one').click()
      User.findAll( { raw: true, where: { username: {[Op.like]: 'jenny@doe.com'  } } } )
      .then( user => {
        assert.equal('Jenny Doe', user[0].name)
      })

    })

    it('should enter password', () => {
      browser.url('https://prometheuspuzzles.herokuapp.com/login')
      $('#mat-input-1').waitForDisplayed()
      $('#mat-input-0').setValue('charo@test.com')
      $('#mat-input-1').setValue('charotest')
      assert.equal('charotest', $('#mat-input-1').getValue())
    })

    it('should clear value', () => {
      $('#mat-input-0').click()
      $('#mat-input-0').clearValue()
      assert.equal('', $('#mat-input-0').getValue())
    })
})

describe('Webdriver API actions', () => {
    it('should hover on figure', () => {
        browser.url('https://prometheuspuzzles.herokuapp.com/index')
        $(`img`).waitForDisplayed()
        assert.equal("", $(`div.flex-container div.one:nth-child(1) div h3`).getText())
        browser.pause(2000)
    })

})

/*describe('Scroll to element', () => {
    it('should scroll to the heading', () => {
        browser.url('http://localhost:4200')
        internetPage.pageHeadline.waitForDisplayed()
        assert.equal(true, internetPage.pageHeadline.isDisplayedInViewport())
        browser.pause(5000)
    })
    it('should scroll into view', () => {
        browser.url('http://localhost:4200')
        internetPage.pageHeadline.scrollIntoView()
        assert.equal(true, internetPage.pageHeadline.isDisplayedInViewport())
        browser.pause(5000)
    })
})

describe('Drag and drop', () => {
    it('should drag column A to column B', () => {
        browser.url('http://localhost:4200')
        $(`div.flex-container div.one:nth-child(${3}) div`).waitForDisplayed()
        $(`div.flex-container div.one:nth-child(${2}) div`).dragAndDrop(internetPage.columnB)
        assert.equal("Polygon Puzzles", internetPage.figureDetails(2).getText())
    })

})

describe('Dropdown Menu', () => {
    it('should select option 1', () => {
        browser.url('http://localhost:4200/ratings')
        $('.dropdown-menu dropdown dropdown-primary ng-star-inserted a-various-dropdown fadeInDropdown').waitForDisplayed()
        internetPage.dropDownMenu.click()
        internetPage.clickDropDownMenuOption1()
        assert.equal(true, internetPagedropDownMenuOption1.isSelected())
    })

})*/
