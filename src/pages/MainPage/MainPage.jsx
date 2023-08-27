import Advantages from "../../components/Advantages/Advantages";
import Banner from "../../components/Banner/Banner";
import BestsWrapper from "../../components/BestsWrapper/BestsWrapper";
import Education from "../../components/Education/Education";
import HowToOrder from "../../components/HowToOrder/HowToOrder";
import Reviews from "../../components/Reviews/Reviews";
import Shelf from "../../components/Shelf/Shelf";
import Types from "../../components/Types/Types";
import WhatMakesUs from "../../components/WhatMakesUs/WhatMakesUs";

const MainPage = () => {
    return (
        <>
            <Banner />
            <Advantages />
            <BestsWrapper />
            <Reviews />
            <Shelf group="weed" type="shelf" title="CHOOSE YOUR WEED" />
            <HowToOrder />
            <WhatMakesUs />
            <Shelf group="newest" type="shelf" title="RECENTLY ADDED" />
            <Types />
            <Education />
        </>
    );
}

export default MainPage;