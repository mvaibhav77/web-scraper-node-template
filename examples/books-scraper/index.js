import puppeteer from "puppeteer";
import { saveBooks } from "./utils.js";

const scrape = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const allBooks = [];
  let currentPage = 1;
  const maxPages = 5;

  while (currentPage <= maxPages) {
    await page.goto(url + `/catalogue/page-${currentPage}.html`);

    // Example: Extract the title of the page
    // const title = await page.title();
    // console.log(`Page title: ${title}`);

    // APPLY ALL THE SCRAPPING LOGICS HERE
    const books = await page.evaluate(() => {
      const bookElements = document.querySelectorAll(".product_pod");
      return Array.from(bookElements).map((book) => {
        const title = book.querySelector("h3 a").getAttribute("title");
        const price = book.querySelector(".price_color").textContent;
        const stock = book.querySelector(".availability")
          ? "In Stock"
          : "Out of Stock";
        const rating = book
          .querySelector("p.star-rating")
          .className.split(" ")[1];
        const link = book.querySelector("h3 a").href;

        return {
          title,
          price,
          stock,
          rating,
          link,
        };
      });
    });

    allBooks.push(...books);
    console.log(`Page ${currentPage} scraped. Found ${books.length} books.`);
    currentPage++;
  }

  saveBooks(allBooks);

  await browser.close();
};

const url = "https://books.toscrape.com";
scrape(url);
