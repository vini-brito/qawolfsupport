const { launch } = require("qawolf");
const selectors = require("../selectors/lebubble5");

const lebubble5 = async browser => {
  // click "Custom GraphQL Query Done (relay to inte..." div
  await browser.click(selectors[0]);
  // click "Click here to add an action..." div
  await browser.click(selectors[1]);
  // click "Element Actions" div
  await browser.click(selectors[2]);
  // click "Set state" div
  await browser.click(selectors[3]);
  // click div
  await browser.click({ css: 'div.has-caption:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)' }); // NOTE this one I altered by hand to see if it would work
  // click "graphql_client_side_query Query result R..." div
  await browser.click(selectors[5]);
  // click "Query result" div
  await browser.click(selectors[6]);
  // type into "1582822869939x5265" input
  await browser.type(selectors[7], "query res");
  // click "Query result" div
  await browser.click(selectors[8]);
  // click div
  await browser.click(selectors[9]);
  // click "Action friendly name Calling category na..." div
  await browser.click(selectors[10]);
  // click "Click" div
  await browser.click(selectors[11]);
  // type into "1582822881564x5409" input
  await browser.type(selectors[12], "graphq");
  // click "GraphQLClient A" div
  await browser.click(selectors[13]);
  // click "s Column 1 's Column 2 's Column 3 's C..." div
  await browser.click(selectors[14]);
  // type into body
  await browser.type(selectors[15], "↓AltLeft");
};

exports.lebubble5 = lebubble5;

if (require.main === module) {
  (async () => {
    const browser = await launch({ url: "redacted" });
    await lebubble5(browser);
    await browser.close();
  })();
}
