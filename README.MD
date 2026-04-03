# QA Automation Project – Sauce Demo

Project URL: https://sauce-demo.myshopify.com

## Purpose:
This project was created to practice and advance my QA automation skills using Playwright with TypeScript.

## 🛠 Technology Stack
Playwright – End-to-end testing
TypeScript – Type safety and structured code
## 🧪 What it tests

### This project focuses on the Cart and Payment systems of the site. Key scenarios include:

- Adding items to the cart
- Adding multiple items to the cart
- Adding the same item multiple times
- Validating that the price and quantity update correctly
- Edge/negative cases in the Payment UI
- Edge/negative cases in the Checkout UI

## ⚙️ Project Structure
* pages/ – Page Object Models for Payment, Dashboard, Checkout
* utils/ – Helper functions (e.g., addItemToCartThenGoToPayment, visibilityCheck)
* data/ – Test data separated from locators
* specs/ – Test scripts
### 💡 Notes
Payment “happy path” is simulated, since I don’t have access to real payment processing.
Test data is centralized in data/ for maintainability.
Focus is on clean, maintainable code and proper test structuring.
