import React from "react";

const Card = ({ beer, loading, beerInfo }) => {
    return(
        <>  
            { loading 
            ? <h1>Loading...</h1>
            : beer.map((item) => {
                return(
                    <>
                        <div className="card" key={item.id} onClick={() => beerInfo(item)}>
                            <h2>{item.id}</h2>
                            <h2>{item.name}</h2>
                            <img src={item.image_url} alt={item.name} />
                        </div>
                    </>
                )
            })
            }
        </>
    )
}

export default Card;