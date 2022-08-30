import React from "react";

type AddingCoinsProps = {

    AddItemToOrder: () => void
    value: number
    setValue: (e: number) => void
}
export const AddingCoinsToOrder = (props: AddingCoinsProps) => {
    // function onChangeValueHandler(e: ChangeEvent<HTMLInputElement>) {
    //     // alert(typeof(Number(e.currentTarget.value)))
    //     props.setValue(Number(e.currentTarget.value))
    //
    // }

    return (
        <div>
            <input type={"number"}
                   min={"0"}
                   step={"1"}
                   className={"input"}
                   value={props.value}
                // onChange={onChangeValueHandler}
            />
            <button type={"submit"}
                    onClick={props.AddItemToOrder}>
                add
            </button>
        </div>
    )
}