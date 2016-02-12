it('should check ng-bind-html', function() {
  expect(element(by.binding('myHTML')).getText()).toBe(
      'I am an HTMLstring with links! and other stuff');


 //expect(element(by.binding('myHTML')).getText()).toBe(
     // 'I am testing my loyalty service html (link) string from  ' +
     //'<a href="#">My Account Loyalty Hub URL');
});