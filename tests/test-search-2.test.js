"use strict";

const expect = require("chai").expect;
const {
  go,
  resize,
  click,
  type,
  exists,
  sendCharacter,
  waitForElement,
  test,
  l,
  Locator,
} = require("testim");

Locator.set(require("./locators/locators.js"));

/*
  # test search 
  # search keyword: 123 
*/
test("search-number", async () => {
  await go("https://www.thegioididong.com/");
  await resize({ width: 1024, height: 680 });
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "123");
  await click(l(".header_.icon-search"));
  await waitForElement(l(".report_text['Tìm thấy']"));
  const found = await exists(l(".report_text['Tìm thấy']"));
  expect(found).to.equal(true);
});

/*
  # search text number
  # search keyword: samsung 2
*/
test("search-text-and-number", async () => {
  await go("https://www.thegioididong.com/");
  await resize({ width: 1024, height: 680 });
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "samsung 2");
  await sendCharacter(l("[id='skw']"), "\r");
  await waitForElement(l(".report_text['Tìm thấy']"));
  const found = await exists(l(".report_text['Tìm thấy']"));
  expect(found).to.equal(true);
});

/*
  # search special characters
  # search keyword: @#$
*/
test("search-special-characters", async () => {
  await go("https://www.thegioididong.com/");
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "@#$");
  await click(l(".header_.icon-search"));
  await waitForElement(l(".noresultsuggestion"));
  const noresult = await exists(l(".noresultsuggestion"));
  expect(noresult).to.equal(true);
}); // end of test
