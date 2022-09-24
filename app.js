const express = require("express");
const chromium = require("chrome-aws-lambda");
// const chromium = require("chromium");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();

  await page.goto("https://google.com");
  const title = await page.title();
  console.log("Page Title : " + title);
  res.send(`hello + ${title}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
