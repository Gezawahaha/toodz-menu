export const counterPlus = (value) =>{
    return (dispatch) => {
        dispatch({
            type: 'PLUS_CART',
            payload: value
        })
    }
}

export const counterMin = (value) =>{
    return (dispatch) => {
        dispatch({
            type: 'MINUS_CART',
            payload: value
        })
    }
}