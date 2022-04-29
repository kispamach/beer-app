import React from "react";

const Card = (props) => {
    return(
        <>  
            {props.beer.map((item) => {
                return(
                    <>
                        <div className="card" key={item.id}>
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