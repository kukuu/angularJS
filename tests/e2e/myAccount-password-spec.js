// pasword-spec.js
describe('My Account Log-in page', function() {
  var password = element(by.model('user.password'));
  var submitButton = element(by.id('submitButton'));

  beforeEach(function() {
    browser.get('http://..../myAccount/login');
	expect(element(by.css('.login-link')).isDisplayed())
        .toBe(true);
    expect(element(by.css('.logout-link')).isDisplayed())
        .toBe(false);
  });
  
  
  it('should allow logging in', function() {
    var name = element(
      by.model('loginCtrl.user.name'));
	  
    var password = element(
      by.model('loginCtrl.user.password'));

    // Type in the username and password
    name.sendKeys('admin');
    password.sendKeys('admin');

    // Click on the login button
    element(by.css('.btn-success')).click();

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