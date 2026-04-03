import { Locator } from "@playwright/test";
import { expect } from "../fixtures/global_fixture";
import { Payment } from "../pages/payment";
import { Dashboard } from "../pages/dashboard";
import { Header } from "../components/header";
import { Checkout } from "../pages/checkout";
import { data, items } from "../data/payment.data";



/**
 * adds item to cart then goes to payment page, note that it assumes that you are at home page
 */
export async function addItemToCartThenGoToPayment({ dashboard, header, checkout }: { dashboard: Dashboard, header: Header, checkout: Checkout }) {

    await dashboard.clickOnItem(items[0]); //because items has only one value for now we selected it, later it can be modified to select random value or another one based on the test
    await dashboard.addCurrentItemToCart();
    await expect(dashboard.cart).toContainText("My Cart (1)") // because it depends on animation that's why we need to wait

    await header.clickOnCheckout(); // this one takes you to checkout/cart UI
    await checkout.clickOnCheckout(); // this one takes you to the payment UI
}

export async function pay({ payment }: { payment: Payment }) {

    await payment.payNow()  //Helper to trigger payment submission multiple times within this test
}

export async function visibilityCheck(arr: Array<Locator>, mustBeHidden = false) {

    for (let i = 0; i < arr.length; i++) {
        if (mustBeHidden) {
            await expect(arr[i]).not.toBeVisible();
        } else {
            await expect(arr[i]).toBeVisible();
        }

    }

}

export async function dataIsPersistent({payment}:{payment:Payment}) {


    for (const [input, locator] of Object.entries(data({payment}))) {

        await expect(locator as Locator).toHaveValue(input)
    }
}
