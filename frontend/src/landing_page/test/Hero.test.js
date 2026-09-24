import React from "react";
import {render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../home/Hero";

//Test suite ->test cases

describe('hero component',()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','/media/images/homeHero.png');
    });
    test('renders signup Button',()=>{
        render(<Hero/>);
        const signupButton = screen.getByRole("button",{ name:/signup/i});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});