import { Locator, Page } from "@playwright/test";



export class Payment {


    lastNameWarning: Locator
    addressWarning: Locator
    cityWarning: Locator
    cardNumberWarning: Locator
    expirationDateWarning: Locator
    securityCodeWarning: Locator
    nameOnCardWarning: Locator
    emailWarning: Locator

    emailField: Locator
    lastNameField: Locator
    cityField: Locator
    addressField: Locator


    constructor(private page: Page) {

        this.lastNameWarning = this.page.getByText('Enter a last name')
        this.addressWarning = this.page.getByText('Enter an address')
        this.cityWarning = this.page.getByText('Enter a city')
        this.cardNumberWarning = this.page.getByText('Enter a card number')
        this.expirationDateWarning = this.page.getByText('Enter a valid expiration date')
        this.securityCodeWarning = this.page.getByText('Enter the CVV or security')
        this.nameOnCardWarning = this.page.getByText('Enter your name exactly as it')
        this.emailWarning = this.page.getByText('Enter an email')

        this.emailField = this.page.getByRole('textbox', { name: 'Email' })
        this.lastNameField = this.page.getByRole('textbox', { name: 'Last name' })
        this.cityField = this.page.getByRole('textbox', { name: 'City' })
        this.addressField = this.page.getByRole('textbox', { name: 'Address' })
    }

    returnInputFields() {

        return [this.emailField, this.lastNameField, this.cityField, this.addressField];

    }

    /**
     * 
     * @returns only needed once to check for visibility
     */
    returnAllWarningLocators() {

        return [this.addressWarning, this.cardNumberWarning, this.cityWarning, this.expirationDateWarning, this.lastNameWarning, this.nameOnCardWarning, this.securityCodeWarning, this.emailWarning]
    }

    async goto() {

        await this.page.goto(process.env.BASE_URL!);
    }


    async enterEmail(email: string) {

        await this.emailField.click();
        await this.emailField.fill(email);

    }

    async enterLastName(lastName: string) {

        await this.lastNameField.click();
        await this.lastNameField.fill(lastName);
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


    async enterCardNumber(cardNumber: string) {
        let item = this.page.getByRole("textbox",{name:"Card Number"});
        await item.click();
        await item.fill(cardNumber);
    }

    async enterCardExpirationDate(expirationDate: string) {

        let item = this.page.getByRole("textbox",{name:"Expiration Date"})
        await item.click()
        await item.fill(expirationDate)
    }

    async enterCardSecurityCode(securityCode: string) {
        let item = this.page.getByRole("textbox",{name:"Security code"})
        await item.click()
        await item.fill(securityCode)
    }


        async enterCardName(name: string) {

        let item = this.page.getByRole("textbox",{name:"Name On Card"})
        await item.click()
        await item.fill(name)
    }

    async enterAddress(address: string) {
        await this.page.getByRole('textbox', { name: 'Address' }).click();
        await this.page.getByRole('textbox', { name: 'Address' }).fill(address);
    }

    async enterCity(city: string) {
        await this.page.getByRole('textbox', { name: 'City' }).click();
        await this.page.getByRole('textbox', { name: 'City' }).fill(city);
    }


    /**
     * save address and non card info for later use
     * note that this does not save card info and it's check
     */
    async checkSaveInfoForLaterUse() {
        await this.page.getByText('Save this information for').check();
    }

    /**
     * 
     * it's a check selector
     */
    async uncheckSaveInfoForLaterUse() {
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
    async goBackToCheckout() {

        await this.page.getByRole('link', { name: 'Cart' }).click()
    }


    returnBilingFields() { //returning fields that are only there to be checked for visibility
        return [
            this.page.locator('#Select1'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('Last name'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('First name (optional)'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('Company (optional)'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('Address'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('Apartment, suite, etc. ('),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('City'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('Postal code (optional)'),
            this.page.getByRole('group', { name: 'Payment' }).getByPlaceholder('Phone (optional)')
        ];

    }




}