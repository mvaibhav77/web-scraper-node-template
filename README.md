# Web Scraper Node.js Template

A ready-to-use Node.js template for web scraping with Puppeteer. This template provides a clean starting point for building web scrapers with useful utilities and examples.

## Features

- **Puppeteer Integration**: Pre-configured for headless browser automation
- **ES Modules**: Modern JavaScript with import/export syntax
- **Utility Functions**: Ready-to-use functions for data saving (JSON/CSV)
- **Example Implementation**: Complete working example included
- **Error Handling**: Basic error handling structure
- **Development Scripts**: Hot-reload support with `--watch`

## Quick Start

1. **Clone or use this template**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start building your scraper**:
   ```bash
   npm start
   ```

## Project Structure

```
├── src/
│   ├── index.js      # Main scraper template (edit this)
│   └── utils.js      # Utility functions
├── examples/
│   └── books-scraper/
│       ├── index.js  # Complete working example
│       ├── utils.js  # Example utilities
│       └── README.md # Example documentation
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Run the main scraper
- `npm run dev` - Run with hot-reload (auto-restart on changes)
- `npm run example:books` - Run the books scraper example

## Getting Started

1. **Edit `src/index.js`**:

   - Replace the example URL with your target site
   - Update the scraping logic in the `page.evaluate()` function
   - Modify the data structure to match what you want to extract

2. **Customize utilities in `src/utils.js`**:
   - Use `saveData()` for JSON output
   - Use `saveCSV()` for CSV output
   - Use `delay()` for adding delays between requests

## Example Usage

```javascript
import puppeteer from "puppeteer";
import { saveData } from "./utils.js";

const scrape = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const data = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".item")).map((item) => ({
      title: item.querySelector(".title")?.textContent,
      price: item.querySelector(".price")?.textContent,
    }));
  });

  saveData(data);
  await browser.close();
};
```

## Utilities

### `saveData(data, filename)`

Saves data as JSON format.

### `saveCSV(data, filename)`

Saves data as CSV format.

### `delay(ms)`

Adds a delay between operations (useful for rate limiting).

## Examples

Check the `examples/` directory for complete working implementations:

- **Books Scraper**: Scrapes book data from books.toscrape.com with pagination

## Tips

- Set `headless: false` in `puppeteer.launch()` for debugging
- Use `page.waitForSelector()` for dynamic content
- Add delays with `delay()` to avoid being rate-limited
- Use `page.screenshot()` for debugging selectors

## Dependencies

- **puppeteer**: Headless Chrome Node.js API for web scraping
- **Node.js**: v14+ required for ES modules support

## License

ISC
