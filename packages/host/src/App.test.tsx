import {render, screen} from "@testing-library/react";
import React from "react";
import App from "./App";
import AppRemote from "remote1/AppRemote"
import AppCart from "cart/AppCart"
jest.mock("remote1/AppRemote", () => {

}, {
    virtual: true
})
jest.mock("cart/AppCart", () => {
}, {
    virtual: true
})

describe("Init Host App", () => {
    test('App  Remote Render', () => {
        render(<App/>);
        expect(AppRemote).toHaveBeenCalled();
    });

    test('App Cart Render', () => {
        render(<App/>);
        expect(AppCart).toHaveBeenCalled()
    })
})
