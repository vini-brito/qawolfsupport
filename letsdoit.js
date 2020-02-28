const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    args:[
           '--start-maximized'
        ]
  });

  let pageOptions = {
    viewPort: {
      width: 1800,
      height: 900
    }

  };

  const page = await browser.newPage(pageOptions);

  await page.setViewportSize({width: 1800, height: 900})
  await page.goto('redacted');

  // clicks event
  await page.click("div.custom-event:nth-child(1)")

  // clicks first "Add action" button
  await page.click("div.potential-token:nth-child(1)")

  // clicks "Element Actions" in the actions menu
  await page.click("div.section-title:nth-child(7)")

  // clicks "Set state"
  await page.click(".actions-pane > div:nth-child(7) > div:nth-child(7)")

  // mousedowns first field to choose which element to set state
  await page.click("div.dropdown:nth-child(1) > div:nth-child(1) > div:nth-child(1)")

  // clicks desired element, first element after "self" element, in this case self is the page element since it's not grouped
  await page.click("div.section:nth-child(4) > div:nth-child(1)")

  // clicks second field to choose which custom state to set div.has-caption:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)
  await page.click("div.has-caption:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")

  // clicks first option of the list of custom states available
  await page.click("div.dropdown-option:nth-child(1)")

  // clicks the dynamic expression builder "value" for us to define the new value of the state
  await page.click("div.row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")

  // clicks the option that I want, in this case "GraphQL Client A"
  await page.click("div.section:nth-child(3) > div:nth-child(7)")

  // clicks the desired custom state (can be thought as attributes in general, like repeating group list etc) of the previously selected element
  await page.click("div.dropdown-option:nth-child(1)")

  // SECOND ROUND - Hand simulate a second iteration of a loop! Do it by just changing some numbers. Go!

  // clicks second "Add action" button
  await page.click("div.potential-token:nth-child(2)")








})();
