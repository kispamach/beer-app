import React, { useEffect, useState } from "react";
import Card from "./Card";
import BeerInfo from "./BeerInfo";
import axios from "axios";

const Main = () => {
    const [beerData, setBeerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://api.punkapi.com/v2/beers?page=");
    const [searchUrl, setSearchUrl] = useState("https://api.punkapi.com/v2/beers?beer_name=");
    const [page, setPage] = useState(1);
    const [beerInfo, setBeerInfo] = useState();
    const [searchfield, setSearchfield] = useState('');

    const beerFun = async() => {
        setLoading(true)
        const res = await axios.get(url + page + '&per_page=24')
        getBeer(res.data)
        setLoading(false)
    }

    const onSearchChange = (event) => {    
        setSearchfield(event.target.value);
    };

    const searchBeer = async() => {
        setLoading(true)
        setBeerData([])
        const res = await axios.get(searchUrl + searchfield + '&page=' + page + '&per_page=24' )
        getBeer(res.data)
        setLoading(false)
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
        if (beerData.length > 23) {
            setBeerData([])
            setPage(page + 1)
        }
    }

    const decreasePage = () => {
        const prevButton = document.querySelector(".prev-btn")
        if(page > 1) {
            setBeerData([])
            setPage(page - 1)
        }
    }

    useEffect(() => {
        console.log(searchfield);
        if (searchfield === '') beerFun();
        searchBeer();
    }, [url, page, searchfield])

    return(
        <>
            <div className="TitleSection">
                <h1>Beer Catalog</h1>
                <input type="text" placeholder="Search beer..." onChange={onSearchChange}/>                
            </div>
            <div className="container">
                <div className="left-content">
                    {/* <div className="card-container"> */}
                        <Card beer={beerData} loading={loading} beerInfo={(beer => setBeerInfo(beer))}/>                    
                    {/* </div> */}
                </div>
                <div className="right-content">
                    <div className="beer-container">
                        <BeerInfo beerInfo={beerInfo}/>
                    </div>
                </div>
            </div>
            <div className="btn-group">
                <button onClick={decreasePage} className="prev-btn">Previous</button>
                <button onClick={increasePage} className="next-btn">Next</button>                          
            </div>
        </>
    )
}

export default Main;