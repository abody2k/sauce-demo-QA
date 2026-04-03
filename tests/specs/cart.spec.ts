import dotenv from "dotenv";
import { expect, test } from "../fixtures/global_fixture";
import path from "path";
import { items } from "../data/payment.data";

dotenv.config({

    path:path.resolve(__dirname, "../.env")
})

test.describe("Cart tests", () => {



    test.beforeEach(async ({ dashboard }) => {
        console.log(process.env.BASE_URL);
        
        await dashboard.goto();


    })

    test("Adding single item to the cart multiple times", async ({ dashboard, page }) => {

        await dashboard.clickOnItem(items[0]);
        //the number i refers to the number of times the item is added to the cart and it
        //can be set later from .env file if needed
        let numberOfTimesToAddItem = 2;
        for (let i = 0; i < numberOfTimesToAddItem; i++) {

            await dashboard.addCurrentItemToCart();
            await expect(dashboard.cart).toContainText(`(${i + 1})`, { timeout: 20000 })
        }

        //it is known that adding items to the cart and then viewing them without refreshing
        //can cause the spinner to spin forever, meaning it is not responsive, this is why we do the
        //next test

        //10 seconds are more than enough because the spinner code is on the front end
        await expect(page.locator(".spinner")).toBeHidden({ timeout: 10000 });

        //do items persist even after refreshing ?

        await page.reload();
        await expect(dashboard.cart).toContainText(`(${numberOfTimesToAddItem})`, { timeout: 20000 })
        //do items persist even after going to different routes within the same domain?
        await dashboard.goto();
        await dashboard.clickOnAbouttUs();
        await expect(dashboard.cart).toContainText(`(${numberOfTimesToAddItem})`, { timeout: 20000 })

    })


    test("adding mutliple items to the cart at the same time", async ({ dashboard, page }) => {

        await dashboard.clickOnItem(items[0]);
        await dashboard.addCurrentItemToCart();
        await page.goBack();
        await dashboard.clickOnItem(items[0])
        await dashboard.addCurrentItemToCart();
        await expect(dashboard.cart).toContainText(`(2)`, { timeout: 20000 })

        //I have not done tests to check if items persist after refreshing because
        // I already did so in a previous test




    })
})

