"use strict";

const expect = require('chai').expect;
const { go, resize, click, type, sendCharacter, exists, waitForElement, test, l, Locator } = require('testim');

Locator.set(require('./locators/locators.js'));

test("test-search", async () => {
  await go("https://www.thegioididong.com/");
  await resize({width: 1024, height: 680});
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), 'abc');
  await sendCharacter(l("[id='skw']"), '\r');
  //TODO Please add an assertion here
  await exists(l("Rt_tic,_Thegioididong.com_khng_tm_t"));
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), 'laptop');
  await sendCharacter(l("[id='skw']"), '\r');
  //TODO Please add an assertion here
  await exists(l("191_Laptop"));
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), 'samsung');
  await sendCharacter(l("Bn_tm_g..."), '\r');
  //TODO Please add an assertion here
  await exists(l("Tm_thy_4.372_kt_qu._Lc_theo:"));
  await waitForElement(l("Samsung_Galaxy_Z_Flip3_5G_256GB"));

}); // end of test
