import fs from "fs";

export const saveData = (data, filename = "scraped_data.json") => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filename, jsonData, "utf8");
  console.log(`Data saved to ${filename}`);
};

export const saveCSV = (data, filename = "scraped_data.csv") => {
  if (data.length === 0) {
    console.log("No data to save");
    return;
  }

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(","),
    ...data.map((row) =>
      headers.map((header) => JSON.stringify(row[header] || "")).join(",")
    ),
  ].join("\n");

  fs.writeFileSync(filename, csvContent, "utf8");
  console.log(`Data saved to ${filename}`);
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
