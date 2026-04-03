import { Locator, Page } from "@playwright/test";

export class Checkout{


    checkoutButton : Locator

    emptyCartPlaceholder : Locator
    constructor(private page : Page){

        this.checkoutButton = this.page.getByRole('button', { name: 'Check Out' });
        this.emptyCartPlaceholder = this.page.getByText('It appears that your cart is')
    }


    async clickOnCheckout(){

        await this.checkoutButton.click();
    }



}