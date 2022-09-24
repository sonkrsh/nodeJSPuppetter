const express = require("express");
const puppeteer = require("puppeteer-core");
// const puppeteer = require("puppeteer");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch(
    "--no-sandbox",
    "--disable-web-security"
  );
  const page = await browser.newPage();

  await page.goto("https://google.com");
  const title = await page.title();
  console.log("Page Title : " + title);
  res.send(`hello + ${title}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
