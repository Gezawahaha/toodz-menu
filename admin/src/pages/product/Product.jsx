import { Link, useLocation } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart"
// import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext/MenuContext";
import { updateMenu } from "../../context/menuContext/apiCalls";

export default function Product() {

    const location = useLocation();
    const [menu, setMenu] = useState(location.menu);
    const {dispatch} = useContext(MenuContext);
    //const menu = location.menu;
    
    const handleChange = (e) => {
        const value = e.target.value;
        setMenu({...menu, [e.target.name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(menu)
        updateMenu(menu, dispatch);
    };
    
    //console.log(menu);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Menu</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          {/* <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/> 
          </div> */}
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={menu.pic} alt="" className="productInfoImg" />
                  <span className="productName">{menu.menutitle}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id: </span>
                      <span className="productInfoValue">{menu._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales: </span>
                      <span className="productInfoValue">0</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active: </span>
                      <span className="productInfoValue">{menu.stock ? 'Active' : 'Deactive'}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{menu.qty}</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder={menu.menutitle} name="menutitle" onChange={handleChange}/>
                  <label>Description</label>
                  <input type="text" placeholder={menu.desc} name="desc" onChange={handleChange}/>
                  <label>Price</label>
                  <input type="number" placeholder={menu.price} name="price" onChange={handleChange}/>
                  <label>In Stock</label>
                  <input type="number" placeholder={menu.qty} name="qty" onChange={handleChange}/>
                  <label>Categories</label>
                  <select name="categories" id="categories" onChange={handleChange} defaultValue={menu.categories} >
                        
                        <option value={'To Share'}>To Share(3-4 people)</option>
                        <option value={'Salad'}>Salad</option>
                        <option value={'Soup'}>Soup</option>
                        <option value={'Kids Meal'}>Kids Meal</option>
                        <option value={'Food'}>Food</option>
                        <option value={'Sides'}>Sides</option>
                        <option value={'Dessert'}>Dessert</option>
                  </select>
                  <label>Active</label>
                  <select name="stock" id="active" onChange={handleChange} defaultValue={menu.stock}>
                      <option value={true}>Active</option>
                      <option value={false}>Deactive</option>
                  </select>
                  <label>Price Level</label>
                    <select name="priceScore" id="priceScore"  onChange={handleChange} defaultValue={menu.priceScore}>
                        <option value={"null"} disabled >Please fill this for recomendations</option>
                        <option value={1}> {'< 10,000'} </option>
                        <option value={2}>{'10,000 - 21,250'}</option>
                        <option value={3}>{'21,250 - 32,500'}</option>
                        <option value={4}>{'32,500 - 43,750'}</option>
                        <option value={5}>{'> 43,750 '}</option>
                    </select>
                    <label>Spicy Level</label>
                    <select name="spicinessScore" id="spicinessScore" onChange={handleChange} defaultValue={menu.spicinessScore}>
                        <option value={"null"} disabled >Please fill this for recomendations</option>
                        <option value={1}>very less spicy</option>
                        <option value={2}>less spicy</option>
                        <option value={3}>normal spicy</option>
                        <option value={4}>more spicy</option>
                        <option value={5}>very spicy</option>
                    </select>
                    <label>Salt Level</label>
                    <select name="saltinessScore" id="saltinessScore" onChange={handleChange} defaultValue={menu.saltinessScore}>
                        <option value={"null"} disabled>Please fill this for recomendations</option>
                        <option value={1}>very less salty</option>
                        <option value={2}>less salty</option>
                        <option value={3}>normal salty</option>
                        <option value={4}>more salty</option>
                        <option value={5}>very salty</option>
                    </select>
                    <label>Sweet Level</label>
                    <select name="sweetnessScore" id="ssweetnessScore" onChange={handleChange} defaultValue={menu.sweetnessScore}>
                        <option value={"null"}disabled hidden>Please fill this for recomendations</option>
                        <option value={1}>very less sweet</option>
                        <option value={2}>less sweet</option>
                        <option value={3}>normal sweet</option>
                        <option value={4}>more sweet</option>
                        <option value={5}>very sweet</option>
                    </select>
                    <label>Sour Level</label>
                    <select name="sourScore" id="sourScore" onChange={handleChange} defaultValue={menu.sourScore}>
                        <option value={"null"}disabled hidden>Please fill this for recomendations</option>
                        <option value={1}>very low sour</option>
                        <option value={2}>low sour</option>
                        <option value={3}>normal sour</option>
                        <option value={4}>high sour</option>
                        <option value={5}>very high sour</option>          
                    </select>
                    <label>Calorie Level</label>
                    <select name="calorieScore" id="calorieScore" onChange={handleChange} defaultValue={menu.calorieScore}>
                        <option value={"null"} disabled hidden>Please fill this for recomendations</option>
                        <option value={1}>very low calorie</option>
                        <option value={2}>low calorie</option>
                        <option value={3}>normal calorie</option>
                        <option value={4}>high calorie</option>
                        <option value={5}>very high calorie</option>    
                    </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={menu.pic} alt="" className="productUploadImg" />
                      <label name="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleSubmit}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
