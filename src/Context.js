import { createContext, useReducer } from "react"
let Context = createContext();
let reducer = (state, action) => {
    switch (action.type) {

        case 'ADD':
            let tempstate1 = state.filter((el) => action.cart.id==el.id);
            if (tempstate1.length > 0) {
                return state;
            }
            else {
                return [...state ,action.cart];


            }
        case 'view':
            return [ action.view];
        case 'Remove':
            let tempstate = state.filter((el) => el.id != action.Id.id)

            return tempstate;

        default:
            return state

    }

}
export function Co(props) {
    let intialState = [];
    let [state, dispatch] = useReducer(reducer, intialState);
    return (
        <>
            <Context.Provider value={{ state, dispatch }}>
                {props.children}

            </Context.Provider>
        </>
    )

}
export { Context };
