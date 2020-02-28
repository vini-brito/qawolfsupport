const { launch } = require("qawolf");
const selectors = require("../selectors/lebubble4");

const lebubble4 = async browser => {
  // click "Custom GraphQL Query Done (relay to inte..." div
  await browser.click(selectors[0]);
  // click "Click here to add an action..." div
  await browser.click(selectors[1]);
  // click "Element Actions" div
  await browser.click(selectors[2]);
  // click "Set state" div
  await browser.click(selectors[3]);
  // click div
  await browser.click(selectors[4]);
  // click "graphql_client_side_query Query result R..." div
  await browser.click(selectors[5]);
  // click div
  await browser.click(selectors[6]);
  // click "Action friendly name Calling category na..." div
  await browser.click(selectors[7]);
  // click "Click" div
  await browser.click(selectors[8]);
  // scroll
  await browser.scroll(selectors[9], { x: 0, y: 128 });
  // click "Current User Do a search for Get an opti..." div
  await browser.click(selectors[10]);
  // click "s Column 1 's Column 2 's Column 3 's C..." div
  await browser.click(selectors[11]);
  // type into body
  await browser.type(selectors[12], "↓AltLeft");
};

exports.lebubble4 = lebubble4;

if (require.main === module) {
  (async () => {
    const browser = await launch({ url: "redacted" });
    await lebubble4(browser);
    await browser.close();
  })();
}
