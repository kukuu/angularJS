/* for:todo-spec.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js']
};*/

/* for: title-spec.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['title-spec.js']
}*/

/* for:homepageTitle-spec.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['homepageTitle-spec.js']
}*/

/*  for:calculator-spec.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['calculator-spec.js']
}*/



// conf.js
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],//spec file
  capabilities: {
    browserName: 'chrome'
	//browserName: 'firefox'
  }
}