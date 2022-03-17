import { writeFileSync } from "fs";
import prettier from "prettier";

(() => {
  const createdDate = new Date().toISOString();
  const GROWTO_DOMAIN = "https://www.growto.kr/";

  const pages = ["/", "/category", "/process", "/request", "./result/405"];

  const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

  const createUrl = pages
    .map((page) => {
      return `
        <url>
            <loc>${GROWTO_DOMAIN + page}</loc>
            <lastmod>${createdDate}</lastmod>
        </url>
    `;
    })
    .join("");

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
        <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
          ${createUrl}
        </urlset>`;

  const formattedSitemap = formatted(sitemap);

  writeFileSync("./public/sitemap.xml", formattedSitemap, "utf8");
})();
