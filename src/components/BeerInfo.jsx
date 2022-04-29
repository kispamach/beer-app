import React from "react";

const BeerInfo = () => {
    return(
        <>
            <h1>Beer name</h1>
            <img src="https://images.punkapi.com/v2/7.png" alt="" />
            <div className="ingredients">
                <div className="group">
                    <h2>Maris Otter Extra Pale</h2>
                </div>
                <div className="group">
                    <h2>Fuggles</h2>
                </div>
            </div>
            <div className="base-info">
                <h3>First brewed: 09/2007</h3>
                <h3>Description: A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.</h3>
                <h3>Brewer tips: The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.</h3>
            </div>
        </>
    )
}

export default BeerInfo;