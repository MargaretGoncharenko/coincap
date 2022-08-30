import React, {useState} from "react";

export type OrderType = {
    name:string
    // amount:number
}
type OrderBlockPropsType = {

}
export const OrderBlock = (props:OrderBlockPropsType) => {
    let[order,setOrder] = useState<OrderType[]>([])

    return(
        <div>
            <div className={"order-box"}>
               <div> my order:</div>
                {
                    order.map(c => {
                        return (
                            <div>
                                {c.name}
                                {/*{c.priceUsd}*/}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}