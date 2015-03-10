
describe('My Account log-in test', function() {

  beforeEach(function() {
    browser.get('http://..../myAccount/login');
  });

  it('should show log-in page', function() {

    // Check that login link is shown and
    // logout link is hidden
    expect(element(by.css('.login-link')).isDisplayed())
        .toBe(true);
    expect(element(by.css('.logout-link')).isDisplayed())
        .toBe(false);
  });
  
  it('should have a title', function() {
    browser.get('http://..../myAccount/login');
    expect(browser.getTitle()).toEqual('Please enter a valid password');
  });

  it('should allow logging in', function() {
    // Navigate to the login page
    browser.get('myAccount/login');

    var name = element(
      by.model('loginCtrl.user.name'));
    var password = element(
      by.model('loginCtrl.user.password'));

    // Type in the username and password
    name.sendKeys('admin');
    password.sendKeys('admin');

    // Click on the login button
    element(by.css('btn-success')).click();

    // Ensure that the user was redirected
    expect(browser.getCurrentUrl())
        .toEqual('http://localhost:8000/myAccount/register');

    // Check that login link is hidden and
    // logout link is shown
    expect(element(by.css('.login-link')).isDisplayed())
        .toBe(false);
    expect(element(by.css('.logout-link')).isDisplayed())
        .toBe(true);

  });
});

/*Notes:
To execute  tests, execute the following in order:

    * If the server is not running, run node server.js from the test folder. You might need to run npm install from that folder first.

    * If Selenium is not up and running, run webdriver-manager start.
    
	
	* Run protractor protractor.conf.js from the folder containing the config file and the specs. 

     * Protractor will open the Chrome browser through Selenium, navigate to the log in page of  the  locally running application, and click through and run the tests as we  defined above. At the end, it should print out whether they were successful, or the reason for failure in case they failed.*/