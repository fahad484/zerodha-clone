import React from 'react'
import Hero from './Hero.js';
import LeftSection from '../products/LeftSection.js';
import RightSection from '../products/RightSection.js';
import Universe from '../products/Universe.js';

function ProductPage() {
    return ( 
        <>
            <Hero/>
            <LeftSection imageUrl="media/images/kite.png" heading="Kite" description="Our ultra-fast flagship trading platform with streaming market data advanced charts an elegant UI and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." TryDemo="Try demo" learnMore="Learn more" playStoreBadge='media/images/googlePlayBadge.svg' appStoreBadge="media/images/appstoreBadge.svg"/>
            <RightSection imageUrl="media/images/products-console.png" heading="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore=" Learn more " />

            <LeftSection imageUrl="media/images/coin.png" heading="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." TryDemo="Coin" learnMore="" playStoreBadge='media/images/googlePlayBadge.svg' appStoreBadge="media/images/appstoreBadge.svg"/>

            <RightSection imageUrl="media/images/kiteconnect.png" heading="Kite Connect API" description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore=" Kite Connect " />
            
            <LeftSection imageUrl="media/images/varsity.png" heading="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." TryDemo="" learnMore="" playStoreBadge='media/images/googlePlayBadge.svg' appStoreBadge="media/images/appstoreBadge.svg"/>
            
            <Universe/>
        </>
     );
}

export default ProductPage;