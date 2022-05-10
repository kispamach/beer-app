import React from "react";

const BeerInfo = ({ beerInfo }) => {
  return (
    <>
      {!beerInfo ? (
        ""
      ) : (
        <>
          <h1>{beerInfo.name}</h1>
          <img src={beerInfo.image_url} alt={beerInfo.name} />
          <div className="base-info">
            <h3 className="first-brewed">
              First Brewed: {beerInfo.first_brewed}
            </h3>
            <h3 className="description">Description: {beerInfo.description}</h3>
            <h4 className="brewer-tips">
              Brewer tips: {beerInfo.brewers_tips}
            </h4>
          </div>
          <div className="ingredients">
            <h2>Ingredients</h2>
            <h3>Malt:</h3>
                <div className="malt">
                {beerInfo.ingredients.malt.map((malt, index) => {
                    return (
                    <div className="group">
                        <h4 key={index}>{malt.name}</h4>
                    </div>
                    );
                })}
                </div>
                <h3>Hops:</h3>
                <div className="malt">
                {beerInfo.ingredients.hops.map((hops, index) => {
                    return (
                    <div className="group">
                        <h4 key={index}>{hops.name}</h4>
                    </div>
                    );
                })}
                </div>
                {
                    !beerInfo.ingredients.yeast ==="" ? "" 
                    : 
                    <>
                        <h3>Yeast:</h3>
                        <div className="group">
                            <h4>{beerInfo.ingredients.yeast}</h4>
                        </div>
                    </>
                }
          </div>
          <div className="food-pairing">
            <h3>Food pairing: </h3>
            {beerInfo.food_pairing.map((food, index) => {
              return (
                <div className="group" key={index}>
                  <h2>{food}</h2>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default BeerInfo;
