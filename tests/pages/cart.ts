import { Page } from "@playwright/test";



export class Cart {


    constructor(private page: Page) {


    }

    async goto() {

        await this.page.goto(process.env.BASE_URL!);
    }


    async enterEmail(email: string) {

        await this.page.getByRole('textbox', { name: 'Email' }).click();
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);

    }

    async enterPassword(password: string) {

        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    }

    async checkEmailMeWithNewsAndOffers() {

        await this.page.getByText('Email me with news and offers').click();
    }
    async uncheckEmailMeWithNewsAndOffers() {

        await this.page.getByText('Email me with news and offers').click();
    }

    async payNow() {

        await this.page.getByRole('button', { name: 'Pay now' }).click();
    }


    async fillCardNumber(cardNumber: string) {

        await this.page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
        await this.page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill(cardNumber);
    }


    async fillAddress(address: string) {
        await this.page.getByRole('textbox', { name: 'Address' }).click();
        await this.page.getByRole('textbox', { name: 'Address' }).fill(address);
    }

    async fillCity(city: string) {
        await this.page.getByRole('textbox', { name: 'City' }).click();
        await this.page.getByRole('textbox', { name: 'City' }).fill(city);
    }


    /**
     * save address and non card info for later use
     * note that this does not save card info and it's check
     */
    async checkSaveInfoForLaterUse(){
        await this.page.getByText('Save this information for').check();
    }

    /**
     * 
     * it's a check selector
     */
    async uncheckSaveInfoForLaterUse(){
        await this.page.getByText('Save this information for').uncheck();
    }

    async checkUseShippingAddressAsBilling() {

        await this.page.getByText('Use shipping address as').check();
    }

        async uncheckUseShippingAddressAsBilling() {

        await this.page.getByText('Use shipping address as').uncheck();
    }


    /**
     * this is an icon button on the top right corner
     */
    async goBackToCheckout(){

        await this.page.getByRole('link', { name: 'Cart' }).click()
    }



    // async all() {



    //     await page.getByText('EmailEnter a valid emailEmail').click();
    //     await page.getByText('Email me with news and offers').click();
    //     await page.locator('#Select0').selectOption('GW');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('GY');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('HT');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('HN');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('HK');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('HU');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('IS');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('IN');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('ID');
    //     await page.locator('#Select0').press('ArrowDown');
    //     await page.locator('#Select0').selectOption('IQ');

    //     await page.getByRole('textbox', { name: 'Email' }).press('ControlOrMeta+a');
    //     await page.getByRole('textbox', { name: 'Email' }).fill('');
    //     await page.getByRole('button', { name: 'Pay now' }).click();
    //     await page.getByRole('textbox', { name: 'Last name' }).click();
    //     await page.getByRole('textbox', { name: 'Last name' }).fill('last name');
    //     await page.getByRole('textbox', { name: 'Email' }).click();
    //     await page.getByRole('textbox', { name: 'Email' }).fill('someemail@gmail.com');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).press('ArrowLeft');
    //     await page.getByRole('textbox', { name: 'Email' }).fill('someemail@ggggmail.com');
    //     await page.getByRole('button', { name: 'Pay now' }).click();

    //     await page.getByRole('textbox', { name: 'Address' }).fill('SOME ADDRESS');
    //     await page.getByRole('textbox', { name: 'Address' }).press('CapsLock');

    //     await page.getByRole('textbox', { name: 'City' }).press('CapsLock');
    //     await page.getByRole('textbox', { name: 'City' }).fill('No where');
        


    //     await page.locator('iframe[name="card-fields-expiry-yspcja76gtp00000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' }).click();
    //     await page.locator('iframe[name="card-fields-expiry-yspcja76gtp00000"]').contentFrame().getByRole('textbox', { name: 'Expiration date (MM / YY)' }).fill('12 / 2040');
    //     await page.locator('iframe[name="card-fields-verification_value-v01x465asdp00000"]').contentFrame().getByRole('textbox', { name: 'Security code' }).click();
    //     await page.locator('iframe[name="card-fields-verification_value-v01x465asdp00000"]').contentFrame().getByRole('textbox', { name: 'Security code' }).fill('512');
    //     await page.locator('iframe[name="card-fields-name-6fqluuueco900000"]').contentFrame().getByRole('textbox', { name: 'Name on card' }).click();
    //     await page.locator('iframe[name="card-fields-name-6fqluuueco900000"]').contentFrame().getByRole('textbox', { name: 'Name on card' }).fill('3534354');
    //     await page.getByRole('button', { name: 'Pay now' }).click();
    //     await page.locator('iframe[name="card-fields-name-6fqluuueco900000"]').contentFrame().getByRole('textbox', { name: 'Name on card' }).click();
    //     await page.locator('iframe[name="card-fields-name-6fqluuueco900000"]').contentFrame().getByRole('textbox', { name: 'Name on card' }).fill('cool name');
    //     await page.locator('._4VRZE > .a8x1wu2 > svg').click();
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).press('Shift+ArrowLeft');
    //     await page.locator('iframe[name="card-fields-number-d3yrijm8dep00000"]').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
    //     await page.getByRole('button', { name: 'Pay now' }).click();
    //     await page.getByRole('link', { name: 'Cart' }).click();

    // }


}