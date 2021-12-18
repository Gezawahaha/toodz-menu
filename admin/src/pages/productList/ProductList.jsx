import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
//import axios from "axios"
import { MenuContext } from "../../context/menuContext/MenuContext"
import { deleteMenu, getMenu } from "../../context/menuContext/apiCalls";


export default function ProductList() {
  //const [data, setData] = useState([]);
  const {menus, dispatch} = useContext(MenuContext)

  useEffect(() => {
    // const getMenu = async () => {
    //   try {
    //     const res = await  axios.get("menus");
    //     setData(res.data);
    //   } catch (err) {
    //       console.log(err);
    //   }
    // };
    // getMenu();

    getMenu(dispatch);
  }, [dispatch])

  
  
  //console.log(data);
  const handleDelete = (id) => {
    deleteMenu(id, dispatch)
  };

  //console.log(menus);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.pic} alt="" />
            {params.row.menutitle}
          </div>
        );
      },
    },
    { field: "qty", headerName: "Stock", width: 120 },
    {
      field: "stock",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (<div>
          { params.row.stock ? 
          <button className="widgetLgButton.Success">active</button> : 
          <button className="widgetLgButton.Success">deactive</button>}
        </div>);
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname:"/product/" + params.row._id, menu: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];



  return (
    <div className="productList">
      <DataGrid
        rows={menus}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={r => r._id}
      />
    </div>
  );
}
