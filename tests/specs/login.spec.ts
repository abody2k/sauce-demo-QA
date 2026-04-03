import path from "node:path";
import { test,expect } from "../fixtures/global_fixture";
import dotenv from "dotenv";

dotenv.config({path:path.resolve(__dirname,"..",".env"    )});


test("Logging in",async ({login,page})=>{

    await login();


})


test("Cart",async({cart})=>{

    await cart.goto();
    await cart.addItemToCart("Grey jacket",2)
    await cart.checkout();

})