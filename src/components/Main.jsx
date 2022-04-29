import React, { useEffect, useState } from "react";
import Card from "./Card";
import BeerInfo from "./BeerInfo";
import axios from "axios";

const Main = () => {
    const [beerData, setBeerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://api.punkapi.com/v2/beers?page=");
    const [nextPage, setNextPage] = useState();
    const [previousPage, setPreivousPage] = useState();
    const [page, setPage] = useState(1)

    const beerFun = async() => {
        const res = await axios.get(url + page)
        getBeer(res.data)
        // console.log(loading);
        console.log(beerData);
    }

    const getBeer = (res) => {
        res.map((item) => {
            setBeerData(state => {
                state = [...state, item]
                return state;
            })
        })
    }

    useEffect(() => {
        beerFun();
    }, [url, page])

    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card beer={beerData}/>
                    
                    <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <BeerInfo />
                </div>
            </div>
        </>
    )
}

export default Main;