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
    }

    const getBeer = (res) => {
        res.map((item) => {
            setBeerData(state => {
                state = [...state, item]
                return state;
            })
        })
    }

    const increasePage = () => {
        setPage(page + 1)
    }

    const decreasePage = () => {
        if(page > 1) setPage(page - 1)
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
                        <button onClick={decreasePage}>Previous</button>
                        <button onClick={increasePage}>Next</button>
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