import { Page } from "puppeteer";
import waitForRedirects from "./waitForRedirects";

const goToDesign = async (page: Page, fileId: string) => {
  if (page.url().includes(fileId)) return;

  await page.goto(`https://www.figma.com/design/${fileId}`);
  await waitForRedirects(page);

  if (!page.url().includes(fileId)) throw new Error(`Page loading failed.`);
};

export default goToDesign;
