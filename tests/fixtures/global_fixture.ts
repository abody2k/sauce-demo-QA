import { test as base } from "@playwright/test";
import { Dashboard } from "../pages/dashboard";
import { Header } from "../components/header";
import { Checkout } from "../pages/checkout";
import { Payment } from "../pages/payment";



type MyFixtures = {


    dashboard: Dashboard,
    
    header: Header,
    checkout:Checkout,
    payment:Payment,
}


export const test = base.extend<MyFixtures>({


    payment: async ({ page }, use) => {

        await use(new Payment(page));
    },


    dashboard: async ({ page }, use) => {

        await use(new Dashboard(page));
    },

    checkout: async({page},use)=>{

        await use(new Checkout(page))

    },


    header: async ({ page }, use) => {

        await use(new Header(page));
    }

})


export const expect = base.expect;