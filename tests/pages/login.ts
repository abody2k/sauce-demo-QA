import {Expect, Page} from "@playwright/test";


export async function Login(page : Page,expect:Expect){

await page.goto(process.env.URL+"/account/login");
await page.getByRole('textbox', { name: 'Email Address' }).fill(process.env.EMAIL!);
await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD!);
await page.getByRole('button', { name: 'Sign In' }).click();
await expect(page).toHaveURL(/https\:\/\/sauce\-demo\.myshopify\.com\/account.*/)
}