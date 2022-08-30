import React, {useEffect, useState} from 'react';
import './App.css';
import {MainPage} from "./Components/MainPage";


export type CoinPropsType = {
    id: string
    name: string
    rank: string
    priceUsd: string
}

function App() {
    let [coins, setCoins] = useState<Array<CoinPropsType>>([])
    const [limit, setLimit] = useState<number>(20)
    useEffect(() => {
        const fetchCoins = async () => {
            const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
            const data = await res.json()
            console.log(data.data)
            setCoins(data.data)
        }
        fetchCoins()
    }, [limit])

    function HandleRefresh() {
        setLimit(20)
        window.scroll(0, 0)
    }

    let [value, setValue] = useState(0)
    return (
        <MainPage coins={coins} setValue={setValue} value={value} limit={limit} setLimit={setLimit}
                  HandleRefresh={HandleRefresh}/>

    );
}

export default App;
