import dotenv from "dotenv";
import { expect, test } from "../fixtures/global_fixture";
import path from "path";
import { addItemToCartThenGoToPayment, dataIsPersistent, pay, visibilityCheck } from "../utils/payment.util";
import { data, fieldInfo } from "../data/payment.data";


dotenv.config({

    path: path.resolve(__dirname, "../.env")
})



test.describe("Payments tests", () => {



    test.beforeEach(async ({ dashboard }) => {
        await dashboard.goto();
    });


    test("Is it possible to access payment UI without any item in the cart?", async ({ page, header, checkout }) => {




        //in this test we try to make illegal access to the payment UI


        await header.clickOnCheckout();
        //this text appears only when there is no item in the cart
        await expect(checkout.emptyCartPlaceholder).toBeVisible()

        //checkout button that takes the user to the payment UI should be invisible in this case
        await expect(checkout.checkoutButton).not.toBeVisible()

        //what if the user entered the payment UI URL directly?

        await page.goto(process.env.BASE_URL + "/checkouts/")

        //user should be redirected somewhere else
        // await expect(page).not.toHaveURL(/checkouts/, { timeout: 10000 })

    })


    test("checking if it's possible to make payment with false info", async ({ dashboard, page, payment, header, checkout }) => {

        await addItemToCartThenGoToPayment({dashboard,header,checkout});

        //trying to click pay without any info
        await pay({payment});
        //we should be on the same page
        await expect(page).toHaveURL(/checkouts/, { timeout: 10000 })


        //multiple warning texts should be visible because of the empty fields

        await visibilityCheck(payment.returnAllWarningLocators())

        //trying to enter a fake email
        await payment.enterEmail(fieldInfo.email)

        await pay({payment});

        await expect(payment.emailWarning).toBeVisible();


        //filling normal info


        await payment.enterAddress(fieldInfo.address)
        await payment.enterCity(fieldInfo.city)
        await payment.enterLastName(fieldInfo.lastName)

        await pay({payment});

        //check if it still declines after only filing some fields without card details

        await visibilityCheck([payment.cardNumberWarning, payment.expirationDateWarning, payment.securityCodeWarning, payment.nameOnCardWarning])


        //I have not written further tests to check if payment works because I don't own the website thus far can't use test nor real data

    })


    test("Checking if using shipping address check works well", async ({ payment, dashboard, header, checkout }) => {


        await addItemToCartThenGoToPayment({dashboard,header,checkout});

        //Check if using shipping address check actually works
        await payment.checkUseShippingAddressAsBilling();

        //payment address info should be hidden in this case
        await visibilityCheck(payment.returnBilingFields(), true)

        //uncheck it to see if it shows up
        await payment.uncheckUseShippingAddressAsBilling();
        await visibilityCheck(payment.returnBilingFields())
    })


    test("False biling info", async ({ payment, dashboard, header, checkout }) => {


        await addItemToCartThenGoToPayment({dashboard,header,checkout});


        //enter false biling info and check pay

        await payment.checkUseShippingAddressAsBilling()
        await payment.enterCardNumber("4242424242424242")

        await payment.enterCardExpirationDate("122019") // trying an old date to check if it detects it
        await expect(payment.expirationDateWarning).toBeVisible()

        await payment.enterCardExpirationDate("122030") //entering December 2030 a valid date
        await expect(payment.expirationDateWarning).not.toBeVisible() // warning should not appear

        await payment.enterCardSecurityCode("9999") // false security code
        await expect(payment.securityCodeWarning).toBeVisible()

        await payment.enterCardSecurityCode("512") // valid security code
        await expect(payment.securityCodeWarning).not.toBeVisible()

        await payment.enterCardName("John Due") // it can be any name even a number

    })



    test("Does data persist after reloads and navigation?", async ({ payment, dashboard, header, checkout, page }) => {


        await addItemToCartThenGoToPayment({dashboard,header,checkout});


        await payment.enterAddress(fieldInfo.address)
        await payment.enterCity(fieldInfo.city)
        await payment.enterLastName(fieldInfo.lastName)
        //save info
        await payment.checkSaveInfoForLaterUse();
        //reload to check if the info is actually saved
        await page.reload();

        await dataIsPersistent({payment});
        //go to another route and return to see if data persists as well
        await dashboard.goto()
        await page.goBack();
        //expect the entered info to be saved with assertions
        await dataIsPersistent({payment});
    })


    
    test("Entering correct info should work", async ({page, payment, dashboard, header, checkout }) => { //happy end


        //note that these info are not correct and only there to simulate a happy end test

        await addItemToCartThenGoToPayment({dashboard,header,checkout});


        //enter false biling info and check pay

        await payment.checkUseShippingAddressAsBilling()
        await payment.enterCardNumber("4242424242424242")

        await payment.enterCardExpirationDate("122030") //entering December 2030 a valid date
        await expect(payment.expirationDateWarning).not.toBeVisible() // warning should not appear

        await payment.enterCardSecurityCode("512") // valid security code
        await expect(payment.securityCodeWarning).not.toBeVisible()

        await payment.enterCardName("John Due") // it can be any name even a number

        await pay({payment});

        await expect(page).toHaveURL(process.env.BASE_URL+"/successful_payment")


    })

})