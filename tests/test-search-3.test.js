'use strict';

const expect = require('chai').expect;
const {
  go,
  resize,
  click,
  type,
  checkbox,
  sendCharacter,
  exists,
  waitForElement,
  test,
  l,
  Locator,
} = require('testim');

Locator.set(require('./locators/locators.js'));

test('test-search-3', async () => {
  await go('https://www.thegioididong.com/');
  await resize({ width: 1024, height: 680 });
  await click(l('Bn_tm_g...'));
  await type(l('Bn_tm_g...'), 'laptop');
  await sendCharacter(l("[id='skw']"), '\r');
  await click(l('Gp_0%'));
  await exists(l("[data-href='-tra-gop-0-phan-tram']_"));
  await waitForElement(l("[data-index='2']_.lb-tragop"));
  const conTag = await exists(l("[data-index='2']_.lb-tragop"));
  expect(conTag).to.equal(true);
});

test("exists" , async () => {
  await go('http://jsbin.testim.io/quh/1');
  await waitForElement('button');
  const first = await exists('button');
  expect(first).to.equal(true);
  const second = await exists('my-element');
  expect(second).to.equal(false);
});
