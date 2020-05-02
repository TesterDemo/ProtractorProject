var homepage = require('../pages/homepage');


describe('Demo Application', function () {

    it('Addition', function () {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.launchUrl('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('125');
        homepage.enterSecondNumber('150');
        homepage.clickBtn();
        homepage.verifyResult('275');



    });

});
