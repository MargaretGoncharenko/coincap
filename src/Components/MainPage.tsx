import React from "react";
import {CoinPropsType} from "../App";
import {ItemsTable} from "./ItemsTable";
import {OrderBlock} from "./OrderBlock";

export type AllItemsPropsType = {

    coins: CoinPropsType[]
    setValue: (e: number) => void
    value: number
    HandleRefresh: () => void
    limit: number
    setLimit: (limit: number) => void
}
export const MainPage = (props: AllItemsPropsType) => {
    return (
        <div>

            <section className={"coins"}>
                <OrderBlock/>
                <article>
                    <p>Showing {props.coins.length} coins</p>
                </article>
                <ItemsTable coins={props.coins}
                            setValue={props.setValue}
                            value={props.value}
                />
                <div className="buttons">
                    <button onClick={() => props.setLimit(props.limit + 20)}>next</button>
                    <button onClick={props.HandleRefresh}>refresh</button>
                </div>
            </section>
        </div>
    )
}