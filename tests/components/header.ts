import { Page } from "@playwright/test";

export class Header {


    constructor(private page: Page) {



    }



    /**
     * this function will click on search word in the header which will take you 
     * to search page
     */
    async clickOnSearch() {

        await this.page.getByRole('banner').getByRole('link', { name: 'Search' }).click();

    }

    async searchForItemUsingEnterButton(itemName: string) {
        await this.page.getByRole('textbox', { name: 'Search' }).click();
        await this.page.getByRole('textbox', { name: 'Search' }).fill(itemName);
        await this.page.getByRole('textbox', { name: 'Search' }).press('Enter');

    }



    async searchForItemUsingSearchIcon(itemName: string) {
        await this.page.getByRole('textbox', { name: 'Search' }).click();
        await this.page.getByRole('textbox', { name: 'Search' }).fill(itemName);
        await this.page.getByRole('button', { name: 'Submit' }).click();

    }

    async clickOnAboutUs() {
        await this.page.getByRole('banner').getByRole('link', { name: 'About Us' }).click();

    }

    async LogOut() {

        await this.page.getByRole('link', { name: 'Log Out' }).click();

    }

    async goToLogin() {

        await this.page.getByRole('link', { name: 'Log In' }).click();

    }

    async goToSignUp() {

        await this.page.getByRole('link', { name: 'Sign up' }).click();


    }


    async clickOnCheckout() {

        await this.page.getByRole('link', { name: 'Check Out' }).click();
    }

    async clickOnMyCart() {

        await this.page.getByRole('link', { name: 'My Cart' }).click();
    }

}