import { Page } from "puppeteer";
import goToDesign from "./goToDesign";

const goToFilePage = async (page: Page, fileId: string) => {
  try {
    await goToDesign(page, fileId);
  } catch (e) {
    throw new Error(`File with id "${fileId}" page loading failed!`);
  }
};

export default goToFilePage;
