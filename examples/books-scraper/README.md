# Books Scraper Example

This example demonstrates how to scrape book data from books.toscrape.com using Puppeteer.

## What it does

- Scrapes book information (title, price, stock, rating, link)
- Handles multiple pages
- Saves data to JSON format

## Running the example

```bash
cd examples/books-scraper
node index.js
```

## Data scraped

- **Title**: Book title
- **Price**: Book price
- **Stock**: Availability status
- **Rating**: Star rating (One, Two, Three, Four, Five)
- **Link**: Direct link to the book

The scraped data will be saved as `books.json` in the same directory.
