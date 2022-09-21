const express = require("express");
const puppeteer = require("puppeteer-core");
const chromium = require("chrome-aws-lambda");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  let launchOptions = {
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  };

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.goto("https://google.com");
  const title = await page.title();
  console.log("Page Title : " + title);
  res.send(`hello + ${title}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
