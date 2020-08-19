const internetPage = require("./pages/internet_page")

describe('interacting with elements', function() {
  it("Get text for element", function() => {
    browser.url('https://prometheuspuzzles.herokuapp.com/index')
    let text = $("h2").getText()
    console.log(text)
    internetPage.getDivText()
    $(`div.flex-container:nth-child(${3}) div`).waitForDisplayed()
    console.log($(`div.flex-container:nth-child(${3}) div`).getText())
    return ($(`div.flex-container:nth-child(${3}) div`).getText())
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
      $(`div.flex-container:nth-child(${3}) div`).waitForDisplayed()
      console.log($(`div.flex-container:nth-child(${3}) div`).getText())
      expect($(`div.flex-container:nth-child(${3}) div`).equals(' '))
    })
    it('should enter username', () => {
      browser.url('https://prometheuspuzzles.herokuapp.com/login')
      $('#mat-input-0').waitForDisplayed()
      $('#mat-input-0').setValue('charo@test.com')
      assert.equal('charo@test.com', $('#mat-input-0').getValue())
    })

    it('should enter password', () => {
      browser.url('https://prometheuspuzzles.herokuapp.com/login')
      $('#mat-input-1').waitForDisplayed()
      $('#mat-input-1').setValue('charotest')
      assert.equal('charotest', $('#mat-input-1').getValue())
    })

    it('should clear value', () => {
      $('#mat-input-0').click()
      $('#mat-input-0').clearValue()
      assert.equal('', $('#mat-input-0').getValue())
    })
})

/*describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://prometheuspuzzles.herokuapp.com/index')

        $('#search_form_input_homepage').setValue('charlo@test.com')
        $('#search_form_password_homepage').setValue('charlotest')
        $('#search_button_homepage').click()

        const title = browser.getTitle()
        console.log('Title is: ' + title)
        outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })

})*/

/*describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://prometheuspuzzles.herokuapp.com/login')

        $('#search_form_input_homepage').setValue('charlo@test.com')
        $('#search_form_password_homepage').setValue('charlotest')
        $('#search_button_homepage').click()

        const title = browser.getTitle()
        console.log('Title is: ' + title)
        outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })

})*/

/*WebDriver driver = new ChromeDriver ();
driver. get (https://prometheuspuzzles.herokuapp.com)*/
