describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://prometheuspuzzles.herokuapp.com/index')
        expect(browser).toHaveTitle('PrometheusPuzzles');
    })
})

describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://prometheuspuzzles.herokuapp.com/index')

        $('#search_form_input_homepage').setValue('WebdriverIO')
        $('#search_form_password_homepage').setValue('WebdriverIO')
        $('#search_button_homepage').click()

        const title = browser.getTitle()
        console.log('Title is: ' + title)
        outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    })

})

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
