import { useContext } from "react";
import { useState } from "react";
import { createMenu } from "../../context/menuContext/apiCalls";
import { MenuContext } from "../../context/menuContext/MenuContext";
import storage from "../../firebase";
import "./newProduct.css";

export default function NewProduct() {
  // const [menutitle, setMenutitle] = useState(null);
  // const [categories, setCategories] = useState(null);
  // const [desc, setDesc] = useState(null);
  // const [price, setPrice] = useState(null);
  // const [qty, setQty] = useState(null);
  // const [stock, setStock] = useState(null);
  // const [calorieScore, setCalorieScore] = useState(null);
  // const [priceScore, setPriceScore] = useState(null);
  // const [saltinessScore, setSaltinessScore] = useState(null);
  // const [sourScore, setSourScore] = useState(null);
  // const [spicinessScore, setSpicinessScore] = useState(null);
  // const [sweetnessScore, setSweetnessScore] = useState(null);
  const [menu, setMenu] = useState(null);
  const [pic, setPic] = useState(null);
  const [uplouded, setUploaded] = useState(0);
  const {dispatch} = useContext(MenuContext);
  

  const handleChange = (e) => {
    const value = e.target.value;
    setMenu({...menu, [e.target.name]: value});
  };

  const upload = (items) => {
    items.forEach((item) => {
      //const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${item.file.name}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMenu((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) =>{
    e.preventDefault();
    upload ([{file: pic, label: "pic"}])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMenu(menu, dispatch);
  };
  //console.log(uplouded, menu);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Menu</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" name="pic" onChange={(e) =>{ 
            setPic(e.target.files[0]); 
            
            }}/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Name new menu" name="menutitle" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <select name="categories" placeholder="Name new menu" id="categories"onChange={handleChange} defaultValue={'Salad'}>
                <option value={'Salad'} disabled>Please Select</option>
                <option value={'To Share'}>To Share(3-4 people)</option>
                <option value={'Salad'}>Salad</option>
                <option value={'Soup'}>Soup</option>
                <option value={'Kids Meal'}>Kids Meal</option>
                <option value={'Food'}>Food</option>
                <option value={'Sides'}>Sides</option>
                <option value={'Dessert'}>Dessert</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Apple Airpods" name="desc" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="number" placeholder="123" name="price" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="number" placeholder="123" name="qty" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="stock" id="active" onChange={handleChange}>
              <option value={true}>Active</option>
              <option value={false}>Deactive</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Price Level</label>
          <select name="priceScore" id="priceScore" onChange={handleChange} defaultValue={"null"}>
            <option value={"null"} disabled >Please fill this for recomendations</option>
            <option value={1}> {'< 10,000'} </option>
            <option value={2}>{'10,000 - 21,250'}</option>
            <option value={3}>{'21,250 - 32,500'}</option>
            <option value={4}>{'32,500 - 43,750'}</option>
            <option value={5}>{'> 43,750 '}</option>
          </select>
        </div>
         <div className="addProductItem">
          <label>Spicy Level</label>
          <select name="spicinessScore" id="spicinessScore" onChange={handleChange} defaultValue={"null"}>
            <option value={"null"} disabled >Please fill this for recomendations</option>
            <option value={1}>very less spicy</option>
            <option value={2}>less spicy</option>
            <option value={3}>normal spicy</option>
            <option value={4}>more spicy</option>
            <option value={5}>very spicy</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Salt Level</label>
          <select name="saltinessScore" id="saltinessScore" onChange={handleChange} defaultValue={"null"}>
            <option value={"null"} disabled>Please fill this for recomendations</option>
            <option value={1}>very less salty</option>
            <option value={2}>less salty</option>
            <option value={3}>normal salty</option>
            <option value={4}>more salty</option>
            <option value={5}>very salty</option>
          </select>
        </div>
       
        <div className="addProductItem">
          <label>Sweet Level</label>
          <select name="sweetnessScore" id="ssweetnessScore" onChange={handleChange} defaultValue={"null"}>
            <option value={"null"}disabled hidden>Please fill this for recomendations</option>
            <option value={1}>very less sweet</option>
            <option value={2}>less sweet</option>
            <option value={3}>normal sweet</option>
            <option value={4}>more sweet</option>
            <option value={5}>very sweet</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Sour Level</label>
          <select name="sourScore" id="sourScore" onChange={handleChange} defaultValue={"null"}>
            <option value={"null"}disabled hidden>Please fill this for recomendations</option>
            <option value={1}>very low sour</option>
            <option value={2}>low sour</option>
            <option value={3}>normal sour</option>
            <option value={4}>high sour</option>
            <option value={5}>very high sour</option>          
          </select>
        </div> 
        <div className="addProductItem">
          <label>Calorie Level</label>
          <select name="calorieScore" id="calorieScore" onChange={handleChange} defaultValue={"null"}>
            <option value={"null"} disabled hidden>Please fill this for recomendations</option>
            <option value={1}>very low calorie</option>
            <option value={2}>low calorie</option>
            <option value={3}>normal calorie</option>
            <option value={4}>high calorie</option>
            <option value={5}>very high calorie</option>    
          </select>
        </div> 
        {
          uplouded === 1 ? (
            <button className="addProductButton" disabled >Upload Done!</button>
          ) : (
            <button className="addProductButton" onClick={handleUpload}>Upload</button>
          )
        }
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
