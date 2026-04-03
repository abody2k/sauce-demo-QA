
import { Page } from "@playwright/test";

export class Footer {

    constructor(private page: Page) {

    }

    async clickOnAboutUs() {

        await this.page.getByRole('link', { name: 'About Us' }).nth(2).click();

    }

    async clickOnSearch() {
        await this.page.getByRole('link', { name: 'Search' }).nth(1).click();
    }
}