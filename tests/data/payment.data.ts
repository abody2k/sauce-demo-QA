import { Payment } from "../pages/payment";

export function data({payment}:{payment:Payment}) {
    
    let user = {

        "Somewhere": payment.addressField,
        "sincity XD": payment.cityField,
        "Due": payment.lastNameField,
        "fakeemail@fakeee.com": payment.emailField};

    return user;
}

export const fieldInfo = {

    "address":"Somewhere",
    "city":"sincity XD",
    "lastName":"Due",
    "email":"fakeemail@fakeee.com"
}

export const items=[

    "Grey jacket",
]