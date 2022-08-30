import React from "react";
import {CoinPropsType} from "../App";
import {AddingCoinsToOrder} from "./AddingCoinsToOrder";


type ItemsTablePropsType = {
    coins: CoinPropsType[]
    setValue: (e: number) => void
    value: number

}
export const ItemsTable = (props: ItemsTablePropsType) => {
    return (
        <div>
            <table>

                <thead>
                <td className={"add"}></td>
                <td>Rank</td>
                <td>Name</td>
                <td>Price (USD)</td>
                </thead>
                <tbody>

                {
                    props.coins.map(c => {
                        let parsedUsd = parseFloat(c.priceUsd).toFixed(2)

                        function AddItemToOrder() {
                            alert("I want to add " + c.name + " in count of: " + props.value)
                        }

                        return (
                            <tr key={c.id}>
                                <AddingCoinsToOrder setValue={props.setValue}
                                                    AddItemToOrder={AddItemToOrder}
                                                    value={props.value}/>
                                <td>{c.rank}</td>
                                <td>{c.name}</td>
                                <td>${parsedUsd}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}