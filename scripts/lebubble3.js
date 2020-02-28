const { launch } = require("qawolf");
const selectors = require("../selectors/lebubble3");

const lebubble3 = async browser => {
  // type into body
  await browser.type(selectors[0], "↓AltLeft");
  // click "Custom GraphQL Query Done (relay to inte..." div
  await browser.click(selectors[1]);
  // click "Event color" div
  await browser.click(selectors[2]);
  // click "Event color" div
  await browser.click(selectors[3]);
  // click "Click here to add an action..." div
  await browser.click(selectors[4]);
  // click "Element Actions" div
  await browser.click(selectors[5]);
  // click "Set state" div
  await browser.click(selectors[6]);
  // click div
  await browser.click(selectors[7]);
  // type into "1582821980675x5132" input
  await browser.type(selectors[8], "query res");
  // click "Query result" div
  await browser.click(selectors[9]);
  // click div
  await browser.click(selectors[10]);
  // click "Action friendly name Calling category na..." div
  await browser.click(selectors[11]);
  // click "Click" div
  await browser.click(selectors[12]);
  // type into "1582821992916x5369" input
  await browser.type(selectors[13], "graphql");
  // click "GraphQLClient A" div
  await browser.click(selectors[14]);
  // click "s Column 1 's Column 2 's Column 3 's C..." div
  await browser.click(selectors[15]);
  // click "Value" div
  await browser.click(selectors[16]);
  // type into body
  await browser.type(selectors[17], "↓AltLeft");
};

exports.lebubble3 = lebubble3;

if (require.main === module) {
  (async () => {
    const browser = await launch({ url: "redacted" });
    await lebubble3(browser);
    await browser.close();
  })();
}
