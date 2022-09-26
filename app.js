const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = process.env.PORT || 3001;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getDataFromXPath = async (xPath, page) => {
  return await page.$x(xPath);
};

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    // headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto("https://app.hrone.cloud/app");
  await sleep(1000);
  const title = await page.title();
  // setTimeout(async function () {
  //   console.log("chala");
  //   await page.waitForSelector("#hrone-username");
  //   await page.type("#hrone-username", "sourav.singh@emoha.com");
  //   await getDataFromXPath(
  //     "/html/body/app-root/app-login/div/div/div/div[2]/div/div/app-login-page/div/div/div[1]/div[2]/button",
  //     page
  //   )
  //     .then((e) => e[0].click())
  //     .catch((error) => console.log(error));
  //   await sleep(1000);
  //   await page.type("#hrone-password", "Sign123@##");
  //   await getDataFromXPath(
  //     "/html/body/app-root/app-login/div/div/div/div[2]/div/div/app-login-page/div/div/div[3]/div[3]/button[2]",
  //     page
  //   )
  //     .then((e) => e[0].click())
  //     .catch((error) => console.log(error));

  //   // await getDataFromXPath(
  //   //   "/html/body/app-root/app-login/div/div/div/div[2]/div/div/app-login-page/div/div/div[3]/div[3]/button[2]",
  //   //   page
  //   // ).click();
  //   // await browser.close();
  // }, 1000);
  console.log("Page Title : " + title);
  await browser.close();
  res.send(`hello + ${title}`);
});

app.listen(port, () => console.log(`Example f app listening on port ${port}!`));
