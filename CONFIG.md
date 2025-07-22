# Web Scraper Configuration Template

Copy and customize this configuration for your scraping needs:

## Common Puppeteer Options

```javascript
const browser = await puppeteer.launch({
  headless: true, // Set to false for debugging
  slowMo: 100, // Slow down operations by 100ms
  devtools: false, // Open Chrome DevTools
  args: [
    "--no-sandbox", // Required for some environments
    "--disable-setuid-sandbox",
    "--window-size=1920,1080",
  ],
});
```

## Common Page Options

```javascript
// Set viewport
await page.setViewport({ width: 1920, height: 1080 });

// Set user agent
await page.setUserAgent(
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
);

// Wait for network idle
await page.goto(url, { waitUntil: "networkidle2" });

// Wait for specific element
await page.waitForSelector(".content");

// Add delay
await page.waitForTimeout(2000);
```

## Common Selectors and Data Extraction

```javascript
// Text content
const title = await page.$eval("h1", (el) => el.textContent);

// Multiple elements
const items = await page.$$eval(".item", (elements) =>
  elements.map((el) => ({
    title: el.querySelector(".title")?.textContent,
    price: el.querySelector(".price")?.textContent,
    link: el.querySelector("a")?.href,
  }))
);

// Attribute values
const imageUrl = await page.$eval("img", (el) => el.src);
const linkHref = await page.$eval("a", (el) => el.href);
```

## Error Handling

```javascript
try {
  await page.goto(url);
} catch (error) {
  if (error.name === "TimeoutError") {
    console.log("Page load timeout");
  } else {
    console.error("Navigation error:", error);
  }
}
```
