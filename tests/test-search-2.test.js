'use strict';

const expect = require('chai').expect;
const {
  go,
  resize,
  click,
  type,
  exists,
  sendCharacter,
  test,
  l,
  Locator,
} = require('testim');

Locator.set(require('./locators/locators.js'));

test('search-text', async () => {
  await go('https://www.thegioididong.com/');
  await resize({ width: 1024, height: 680 });
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), '123');
  await click(l('.header_.icon-search'));
  //TODO Please add an assertion here
  await exists(l('Tm_thy_1_kt_qu._Lc_theo:'));

  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), 'samsung 2');
  await sendCharacter(l("[id='skw']"), '\r');
  //TODO Please add an assertion here
  await exists(l('Tm_thy_1_kt_qu._Lc_theo:'));
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), '@#$');
  await click(l('.header_.icon-search'));
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), 'abc@#$');
  await sendCharacter(l('Bn_tm_g...'), '\r');
  await sendCharacter(l("[id='skw']"), '\r');
  //TODO Please add an assertion here
  await exists(l('_tm_c_kt_qu_chnh_xc_hn,_bn_vui_lng:'));
}); // end of test

test('search-special-characters', async () => {
  await go('https://www.thegioididong.com/');
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), 'samsung 2');
  await sendCharacter(l("[id='skw']"), '\r');
  //TODO Please add an assertion here
  await exists(l('Tm_thy_1_kt_qu._Lc_theo:'));
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), '@#$');
  await click(l('.header_.icon-search'));
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), 'abc@#$');
  await sendCharacter(l('Bn_tm_g...'), '\r');
  await sendCharacter(l("[id='skw']"), '\r');
  //TODO Please add an assertion here
  await exists(l('_tm_c_kt_qu_chnh_xc_hn,_bn_vui_lng:'));
}); // end of test
