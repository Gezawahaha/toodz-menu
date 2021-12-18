const MenuReducer = (state, action) =>{
    switch (action.type){
        case "GET_MENU_START":
            return {
                menus: [],
                isFetching: false,
                error: false,
            };
        case "GET_MENU_SUCCESS"  :
            return {
                menus: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_MENU_FAILURE"  :
            return {
                menus: [],
                isFetching: false,
                error: true
            };  
        case "DELETE_MENU_START":
            return {
                ...state,
                isFetching: false,
                error: false,
            };
        case "DELETE_MENU_SUCCESS"  :
            return {
                menus: state.menus.filter((menu)=> menu._id !== action.payload ),
                isFetching: false,
                error: false,
            };
        case "DELETE_MENU_FAILURE"  :
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case "CREATE_MENU_START":
        return {
            ...state,
            isFetching: false,
            error: false,
        };
        case "CREATE_MENU_SUCCESS"  :
            return {
                menus: [...state.menus, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_MENU_FAILURE"  :
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case "UPLOAD_MENU_START":
        return {
            ...state,
            isFetching: true,
            error: false,
        };
        case "UPLOAD_MENU_SUCCESS":
        return {
            menus: state.menus.map(
            (menu) => menu._id === action.payload._id && action.payload
            ),
            isFetching: false,
            error: false,
        };
        case "UPLOAD_MENU_FAILURE":
        return {
            ...state,
            isFetching: false,
            error: true,
        };  
        default:
            return { ...state };
    };
    
};

export default MenuReducer;