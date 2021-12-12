"use strict";

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
} = require("testim");

Locator.set(require("./locators/locators.js"));

test("test-search-1", async () => {
  await go("https://www.thegioididong.com/");
  await resize({ width: 1024, height: 680 });
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "laptop");
  await sendCharacter(l("[id='skw']"), "\r");
  await click(l("Gp_0%"));
  await waitForElement(".lb-tragop");
  const conTag = await exists(".lb-tragop");
  expect(conTag).to.equal(true);
});

test("test-search-2", async () => {
  await go("https://www.thegioididong.com/");
  await resize({ width: 1024, height: 680 });
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "laptop");
  await sendCharacter(l("[id='skw']"), "\r");
  await click(l("Gp_0%"));
  await waitForElement("[data-href='-tra-gop-0-phan-tram']");
  const checked = await exists("[data-href='-tra-gop-0-phan-tram']");
  expect(checked).to.equal(true);
  await waitForElement("[data-index='2'] .lb-tragop");
  const conTag = await exists("[data-index='2'] .lb-tragop");
  expect(conTag).to.equal(true);
});
