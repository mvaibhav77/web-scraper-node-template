import fs from "fs";

export const saveBooks = (books) => {
  const data = JSON.stringify(books, null, 2);
  fs.writeFileSync("books.json", data, "utf8");
  console.log("Books saved to books.json");
};
