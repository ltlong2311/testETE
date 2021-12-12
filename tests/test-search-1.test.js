"use strict";

const expect = require('chai').expect;
const {
  go,
  resize,
  click,
  type,
  sendCharacter,
  exists,
  waitForElement,
  test,
  l,
  Locator,
} = require('testim');

Locator.set(require('./locators/locators.js'));

/*
  # search text 
  # search keyword: abc (not exist)
*/
test("search-text", async () => {
  await go("https://www.thegioididong.com/");
  await resize({ width: 1024, height: 680 });
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "abc");
  await sendCharacter(l("[id='skw']"), "\r");
  await waitForElement(l(".report_text['Rt_tic,...']"));
  const noresultNotify = await exists(l(".report_text['Rt_tic,...']"));
  expect(noresultNotify).to.equal(true);
});

/*
  # search text
  # search keyword: laptop (exist - in the catalog)
  # product type
*/

test("search-text-exist-1", async () => {
  await go("https://www.thegioididong.com/");
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "laptop");
  await sendCharacter(l("[id='skw']"), "\r");
  await waitForElement(l("[data-id='44']_.sort-total"));
  const sortTotal = await exists(l("[data-id='44']_.sort-total"));
  expect(sortTotal).to.equal(true);
});

/*
  # test search 
  # search keyword: samsung (exist)
  # product name
*/

test("search-text-exist-2", async () => {
  await go("https://www.thegioididong.com/");
  await click(l("Bn_tm_g..."));
  await type(l("Bn_tm_g..."), "samsung");
  await sendCharacter(l("Bn_tm_g..."), "\r");
  //check results
  await waitForElement(l(".report_text['Tìm thấy']"));
  await exists(l(".report_text['Tìm thấy']"));
  await waitForElement(l("Samsung_Galaxy_Z_Flip3_5G_256GB"));
  const itemTitle = await exists(l("Samsung_Galaxy_Z_Flip3_5G_256GB"));
  expect(itemTitle).to.equal(true);
});
