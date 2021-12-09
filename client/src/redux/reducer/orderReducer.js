

const globalState = {
    order: [],
    totalOrder: 0,
    
}

const rootReducer = (state = globalState, action) => {
    switch(action.type){
        case 'PLUS_CART':
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        case 'MINUS_CART':
            return {

            }
        default:
            return state
    }
}



export default rootReducer