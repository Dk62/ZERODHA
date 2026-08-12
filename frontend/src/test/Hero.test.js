import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/HeroSection';

describe("hero component", () => {
    test("render hero component", () => {
         render(<Hero/>)
         const heroImage =screen.getByRole("img");
         expect (heroImage).toBeInTheDocument();
         expect (heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });
})