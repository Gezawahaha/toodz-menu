
//GET
export const getMenuStart = () =>({
    type: "GET_MENU_START",
});
export const getMenuSuccess = (menus) =>({
    type: "GET_MENU_SUCCESS",
    payload: menus
});
export const getMenuFailure = () =>({
    type: "GET_MENU_FAILURE",
});

//DELETE
export const deleteMenuStart = () =>({
    type: "DELETE_MENU_START",
});
export const deleteMenuSuccess = (id) =>({
    type: "DELETE_MENU_SUCCESS",
    payload: id
});
export const deleteMenuFailure = () =>({
    type: "DELETE_MENU_FAILURE",
});

//CREATE
export const createMenuStart = () =>({
    type: "CREATE_MENU_START",
});

export const createMenuSuccess = (menu) =>({
    type: "CREATE_MENU_SUCCESS",
    payload: menu
});
export const createMenuFailure = () =>({
    type: "CREATE_MENU_FAILURE",
});

//UPDATE
export const updateMenuStart = () => ({
    type: "UPDATE_MENU_START",
  });
  
  export const updateMenuSuccess = (menu) => ({
    type: "UPDATE_MENU_SUCCESS",
    payload: menu,
  });
  
  export const updateMenuFailure = () => ({
    type: "UPDATE_MENU_FAILURE",
  });