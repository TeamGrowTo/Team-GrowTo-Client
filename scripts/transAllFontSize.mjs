import { readdirSync, readFileSync, writeFileSync } from "fs";

import { calcFontSize } from "./calcFontSize.mjs";

(() => {
  const directory = ["./styles", "./pages"];

  const searchDirectory = (path) => {
    const dirContents = readdirSync(path);

    dirContents.map((content) => {
      if (isPageFile(path, content) || content.includes(".ts"))
        return writeFile(`${path}/${content}`);
      else if (content.includes(".tsx")) return;
      else searchDirectory(`${path}/${content}`);
    });
  };

  const searchFile = (path) => {
    let fileContents = readFileSync(path, "utf8");
    let lastIndex = 0;
    let startIndex = 0;

    while (lastIndex < fileContents.length && lastIndex !== -1) {
      const findStartPoint = fileContents.substring(lastIndex);
      const RegexStartIndex = findStr(findStartPoint, /[0-9.]{1,5}rem/);

      if (RegexStartIndex === -1) break;

      startIndex = RegexStartIndex + lastIndex;
      lastIndex = fileContents.indexOf("rem", startIndex);

      const replaceResult = replaceValue(fileContents, startIndex, lastIndex);

      fileContents = replaceResult.replaceFile;
      lastIndex = startIndex + replaceResult.replaceStringLen + 3;
    }

    return fileContents;
  };

  const isPageFile = (path, file) => {
    return path.includes("pages") && file.includes(".tsx");
  };

  const findStr = (str, findRegex) => {
    return str.search(findRegex);
  };

  const replaceValue = (str, start, end) => {
    const frontStr = str.substring(0, start);
    const backStr = str.substring(end);
    const transSize = calcFontSize(Number(str.substring(start, end)));

    return {
      replaceFile: `${frontStr}${transSize + backStr}`,
      replaceStringLen: String(transSize).length,
    };
  };

  const writeFile = (path) => {
    let newFile = searchFile(path);

    writeFileSync(path, newFile, "utf8");
  };

  directory.map((dir) => searchDirectory(dir));
})();
