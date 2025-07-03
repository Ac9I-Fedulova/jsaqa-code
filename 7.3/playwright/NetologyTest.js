const {
  chromium
} = require("playwright");

(async () => {
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click("text=Каталог курсов");
  await page.pause();

  //assertion
  await browser.close();
})();