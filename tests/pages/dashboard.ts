
import { Locator, Page } from "@playwright/test";


export class Dashboard {

    page: Page;
    facebookIcon: Locator;
    twitterIcon: Locator;
    instagramIcon: Locator;
    pinterestIcon: Locator;
    newsAtomIcon: Locator;
    cart: Locator;


    constructor(private p: Page) {
        this.page = p;
        this.facebookIcon = this.page.getByRole('link').filter({ hasText: /^$/ }).first()
        this.twitterIcon = this.page.getByRole('link').filter({ hasText: /^$/ }).nth(1)
        this.instagramIcon = this.page.getByRole('link').filter({ hasText: /^$/ }).nth(2)
        this.pinterestIcon = this.page.getByRole('link').filter({ hasText: /^$/ }).nth(3)
        this.newsAtomIcon = this.page.getByRole('link').filter({ hasText: /^$/ }).nth(4)
        this.cart = this.page.getByRole('link', { name: 'My Cart' })
    
    }


    async goto() {

        await this.page.goto(process.env.BASE_URL);

    }


    async homeLogoClick() {

        await this.page.getByRole('link', { name: 'Home' }).click();

    }


    async clickOnCatalog() {

        await this.page.getByRole('link', { name: 'Catalog' }).click();

    }

    async clickOnBlog() {

        await this.page.getByRole('link', { name: 'Blog' }).click();

    }

    async clickOnAbouttUs() {


        await this.page.locator('#main-menu').getByRole('link', { name: 'About Us' }).click();
    }


    async ClickOnWhishlist() {

        await this.page.getByRole('link', { name: 'Wish list' }).click();

    }

    async ClickOnReferAFriend() {

        await this.page.getByRole('link', { name: 'Refer a friend' }).click();

    }


    async clickOnItem(itemName: string) {


        await this.page.getByRole('link', { name: itemName }).click();
    }

    async addCurrentItemToCart() {

        await this.page.getByRole('button', { name: 'Add to Cart' }).click();

    }


    // async bla() {




}