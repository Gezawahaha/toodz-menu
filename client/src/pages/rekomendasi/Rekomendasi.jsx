import React, {  useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import './rekomendasi.scss'
import { CardMenu } from '../../components/specific'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { useSelector } from 'react-redux'
// import { selectRestoMenu } from '../../redux/restoSlice'

const _ = require('lodash');

// const fakeMenu = [
//     { "title": "Sate Padang","price": "10000", "img": "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
//     { "title": "Nasi Kuning Sekut","price": "20000", "img": "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
//     { "title": "Indomie Mantab", "price": "30000","img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
//     { "title": "Martabokk", "price": "40000","img": "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
// ];

const Rekomendasi = () => {

    //NILAI INPUT
    const [state, setState] = useState({
        categories: '',
        priceScore: '',
        spicinessScore: '',
        saltinessScore: '',
        sweetnessScore: '',
        calorieScore: '',
        sourScore: '',
        totalScore: 0

    });

    const [resultData, setResult] = useState([]);
    const [resultCondition, setCondition] = useState(false)
    const [isLoading, setLoading] = useState(false);
    const fakeMenu = [
        {
            "_id": "61bb61dfaeb09f2a52a5a8e5",
            "menutitle": "Carbonara Platter",
            "categories": "To Share",
            "price": 55000,
            "desc": "french fries, breaded mushroom, sausage, chicken fingers & wings",
            "stock": true,
            "qty": 0,
            "pic": "https://firebasestorage.googleapis.com/v0/b/toodzhouse-6abde.appspot.com/o/items%2FTOODZ%20-%20To%20Share%20-%20Carbonara%20platter.jpg?alt=media&token=83b88ea0-0146-4cf8-bd5c-6f09d7f76af5",
            "priceScore": 4,
            "spicinessScore": 1,
            "saltinessScore": 5,
            "sweetnessScore": 1,
            "calorieScore": 3,
            "sourScore": 1,
            "createdAt": "2021-12-16T15:57:19.172Z",
            "updatedAt": "2021-12-16T15:57:19.172Z",
            "__v": 0
        },
        {
            "_id": "61bb6224aeb09f2a52a5a8e7",
            "menutitle": "Veggie Carbonara Platter",
            "categories": "To Share",
            "price": 50000,
            "desc": "french fries, parmesan crusted broccoli, breaded cauliflowers, breaded mushroom, breaded eggplant",
            "stock": true,
            "qty": 0,
            "pic": "https://firebasestorage.googleapis.com/v0/b/toodzhouse-6abde.appspot.com/o/items%2FTOODZ%20-%20To%20Share%20-%20Veggie%20carbonara%20platter(1).jpg?alt=media&token=7a37947c-c103-40cb-be59-7011905f14be",
            "priceScore": 4,
            "spicinessScore": 1,
            "saltinessScore": 5,
            "sweetnessScore": 1,
            "calorieScore": 3,
            "sourScore": 1,
            "createdAt": "2021-12-16T15:58:28.930Z",
            "updatedAt": "2021-12-16T15:58:28.930Z",
            "__v": 0
        },
        {
            "_id": "61bb5d2aaeb09f2a52a5a8ce",
            "menutitle": "Chicken Clear Soup",
            "categories": "Soup",
            "price": 33000,
            "desc": "",
            "stock": true,
            "qty": 0,
            "pic": "https://firebasestorage.googleapis.com/v0/b/toodzhouse-6abde.appspot.com/o/items%2FTOODZ%20-%20Mains%20-%20Chicken%20clear%20soup.jpg?alt=media&token=0b3efacc-d834-49c9-a755-3bfb8708b5a4",
            "priceScore": 2,
            "spicinessScore": 1,
            "saltinessScore": 4,
            "sweetnessScore": 1,
            "calorieScore": 3,
            "sourScore": 1,
            "createdAt": "2021-12-16T15:37:14.939Z",
            "updatedAt": "2021-12-16T15:37:14.939Z",
            "__v": 0
        },
        {
            "_id": "61bb64fdaeb09f2a52a5a8f0",
            "menutitle": "Waffle with Toppings, Cereal and Cheese",
            "categories": "Dessert",
            "price": 35000,
            "desc": "",
            "stock": true,
            "qty": 0,
            "pic": "https://firebasestorage.googleapis.com/v0/b/toodzhouse-6abde.appspot.com/o/items%2FTOODZ%20-%20Sweets%20-%20Waffle%20with%20cereal%20and%20cheese.jpg?alt=media&token=59eea34f-e1e7-4376-969b-8c42973e2f09",
            "priceScore": 3,
            "spicinessScore": 1,
            "saltinessScore": 2,
            "sweetnessScore": 5,
            "calorieScore": 3,
            "sourScore": 1,
            "createdAt": "2021-12-16T16:10:37.290Z",
            "updatedAt": "2021-12-16T16:10:37.290Z",
            "__v": 0
        },
        {
            "_id": "61bb55d92ac3627f1628fc4d",
            "menutitle": "Corned Rice with Sausage & Chicken Wing",
            "categories": "Kids Meal",
            "price": 38000,
            "desc": "",
            "stock": true,
            "qty": 0,
            "pic": "https://firebasestorage.googleapis.com/v0/b/toodzhouse-6abde.appspot.com/o/items%2FCorned%20Rice%20w_%20Sausage%20_%20Chicken%20Wing.jpg?alt=media&token=e5564cbf-2655-4546-8b32-8be89e5f81d5",
            "priceScore": 3,
            "spicinessScore": 3,
            "saltinessScore": 4,
            "sweetnessScore": 1,
            "calorieScore": 3,
            "sourScore": 1,
            "createdAt": "2021-12-16T15:06:01.875Z",
            "updatedAt": "2021-12-16T15:06:01.875Z",
            "__v": 0
        },
    ];

    
    

    function getMinMax(value) {
        const priceMin = _.minBy(value, 'priceScore');
        const spicinessMax = _.maxBy(value, 'spicinessScore');
        const saltinessMax = _.maxBy(value, 'saltinessScore');
        const sweetnessMax = _.maxBy(value, 'sweetnessScore');
        const calorieMax = _.maxBy(value, 'calorieScore');
        const sourMax = _.maxBy(value, 'sourScore');
        return {
            priceScoreMin: priceMin.priceScore,
            spicinessScoreMax: spicinessMax.spicinessScore,
            saltinessScoreMax: saltinessMax.saltinessScore,
            sweetnessScoreMax: sweetnessMax.sweetnessScore,
            calorieScoreMax: calorieMax.calorieScore,
            sourScoreMax: sourMax.sourScore,
        }
    }

    
    function rekNormalisai(data){
        const getNilaiBobot = data;
        const kepentingan = {
            priceScore: state.priceScore/state.totalScore,
            spicinessScore: state.spicinessScore/state.totalScore,
            saltinessScore: state.saltinessScore/state.totalScore,
            sweetnessScore: state.sweetnessScore/state.totalScore,
            calorieScore: state.calorieScore/state.totalScore,
            sourScore: state.sourScore/state.totalScore,
        };
        const maxmin = getMinMax(getNilaiBobot);
        //console.log(state.priceScore, "/", state.totalScore,"=",kepentingan);
        const rekomNormalisasi = data.map(function(testRek){
            const finals = ((maxmin.priceScoreMin/testRek.priceScore)* kepentingan.priceScore) +
            ((testRek.spicinessScore/ maxmin.spicinessScoreMax)* kepentingan.spicinessScore) +
            ((testRek.saltinessScore/ maxmin.saltinessScoreMax)* kepentingan.saltinessScore) +
            ((testRek.sweetnessScore/ maxmin.sweetnessScoreMax)* kepentingan.sweetnessScore) +
            ((testRek.calorieScore/ maxmin.calorieScoreMax)* kepentingan.calorieScore) +
            ((testRek.sourScore/ maxmin.sourScoreMax)* kepentingan.sourScore);
            //console.log(testRek.priceScore);
            // console.log("(",maxmin.priceScoreMin,"/",testRek.priceScore,")*", kepentingState.priceScore,") +((",testRek.spicinessScore,"/", maxmin.spicinessScoreMax,")*", kepentingState.spicinessScore ,")+((",
            // testRek.saltinessScore, "/", maxmin.saltinessScoreMax,")*", kepentingState.saltinessScore,") +((",
            // testRek.sweetnessScore, "/", maxmin.sweetnessScoreMax,")*", kepentingState.sweetnessScore,") +((",
            // testRek.calorieScore, "/", maxmin.calorieScoreMax,")*", kepentingState.calorieScore,") +((",
            // testRek.sourScore, "/", maxmin.sourScoreMax,")*", kepentingState.sourScore,")= ",finals) ;
            console.log("Menu & Skor :",testRek.menutitle,finals)
            return {
                ...testRek,
                FinalScore: ((maxmin.priceScoreMin/testRek.priceScore)* kepentingan.priceScore) +
                            ((testRek.spicinessScore/ maxmin.spicinessScoreMax)* kepentingan.spicinessScore) +
                            ((testRek.saltinessScore/ maxmin.saltinessScoreMax)* kepentingan.saltinessScore) +
                            ((testRek.sweetnessScore/ maxmin.sweetnessScoreMax)* kepentingan.sweetnessScore) +
                            ((testRek.calorieScore/ maxmin.calorieScoreMax)* kepentingan.calorieScore) +
                            ((testRek.sourScore/ maxmin.sourScoreMax)* kepentingan.sourScore),
            
            }
            
        })
        return rekomNormalisasi
    }
   
    const handleSubmitClick = (e) => {
        e.preventDefault();//masukan data result kesini
        
        setLoading(true);
        setResult(rekNormalisai(fakeMenu));
        if( state.priceScore === ''  || state.spicinessScore === '' || state.saltinessScore === '' || state.sweetnessScore === '' || state.calorieScore === '' || state.sourScore === ''){
            setCondition(false);
        }else{
            setCondition(true);
        }
        setTimeout(() =>{setLoading(false)},3000);
    };

    
    

    const handleChange = (e ) => {
        
        e.preventDefault();
        //setRekom(fakeMenu)
        const {name , value} = e.target 
        //console.log(e.target);  
        if (name !== "categories") {
            setState(prevState => ({
                ...prevState,
                [name] : value,
                "totalScore" : prevState.totalScore + value
                
            })); 
        }else{
            setState(prevState => ({
                ...prevState,
                [name] : value,
            }));
            
        }
        

    };

    const sorted = resultData.sort((a, b)=>{
            return b.FinalScore - a.FinalScore 
        
    })
    return (
        <div className="rekom-wraper">
            <div className="rekom-container">
                <div className="rekom-title">
                    <h3>Our Recomendations food's by your self</h3>
                    <p>we can find the best option with your kriteria <br/> please fill this from below </p>
                    
                </div>
                <div className="rekom-quest">
                    <div className="quest">
                        <InputLabel className="from-title">Price Range</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="priceScore">Please enter price range</InputLabel>
                            <Select
                            name="priceScore"
                            id="priceScore"
                            onChange={handleChange}
                            value={state.priceScore}
                            >
                            
                            <MenuItem value={1}> {'< 10,000'} </MenuItem>
                            <MenuItem value={2}>{'10,000 - 21,250'}</MenuItem>
                            <MenuItem value={3}>{'21,250 - 32,500'}</MenuItem>
                            <MenuItem value={4}>{'32,500 - 43,750'}</MenuItem>
                            <MenuItem value={5}>{'> 43,750 '}</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {/* <div className="quest">
                        <InputLabel className="from-title">Categories</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="categories">Please enter categories</InputLabel>
                            <Select
                            name="categories"
                            id="categories"
                            onChange={handleChange}
                            value={state.categories}
                            >
                            <MenuItem value={'To Share'}>To Share(3-4 people)</MenuItem>
                            <MenuItem value={'Salad'}>Salad</MenuItem>
                            <MenuItem value={'Soup'}>Soup</MenuItem>
                            <MenuItem value={'Kids Meal'}>Kids Meal</MenuItem>
                            <MenuItem value={'Food'}>Main Course</MenuItem>
                            <MenuItem value={'Sides'}>Sides</MenuItem>
                            <MenuItem value={'Dessert'}>Dessert</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}
                    <div className="quest">
                        <InputLabel className="from-title">Spiciness Level</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="demo-simple-select-label">Please enter spiciness level</InputLabel>
                            <Select
                            name="spicinessScore"
                            id="spicinessScore"
                            onChange={handleChange}
                            value={state.spicinessScore}
                            >
                            <MenuItem value={1}>very less spicy</MenuItem>
                            <MenuItem value={2}>less spicy</MenuItem>
                            <MenuItem value={3}>normal spicy</MenuItem>
                            <MenuItem value={4}>more spicy</MenuItem>
                            <MenuItem value={5}>very spicy</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="quest">
                        <InputLabel className="from-title">Saltiness Level</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="demo-simple-select-label">Please enter saltiness level</InputLabel>
                            <Select
                            name="saltinessScore"
                            id="saltinessScore"
                            onChange={handleChange}
                            value={state.saltinessScore}
                            >
                            <MenuItem value={1}>very less salty</MenuItem>
                            <MenuItem value={2}>less salty</MenuItem>
                            <MenuItem value={3}>normal salty</MenuItem>
                            <MenuItem value={4}>more salty</MenuItem>
                            <MenuItem value={5}>very salty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="quest">
                        <InputLabel className="from-title">Sweetness Level</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel id="demo-simple-select-label">Please enter sweetness level</InputLabel>
                            <Select
                            name="sweetnessScore"
                            id="sweetnessScore"
                            onChange={handleChange}
                            value={state.sweetnessScore}
                            >
                            <MenuItem value={1}>very less sweet</MenuItem>
                            <MenuItem value={2}>less sweet</MenuItem>
                            <MenuItem value={3}>normal sweet</MenuItem>
                            <MenuItem value={4}>more sweet</MenuItem>
                            <MenuItem value={5}>very sweet</MenuItem>
                            </Select>
                        </FormControl>
                    </div> 
                    <div className="quest">
                        <InputLabel className="from-title">Sour Level</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel>Please enter sour level</InputLabel>
                            <Select
                            name="sourScore"
                            id="sourScore"
                            onChange={handleChange}
                            value={state.sourScore}
                            >
                            <MenuItem id="calorieScore" value={1}>very low sour</MenuItem>
                            <MenuItem id="calorieScore" value={2}>low sour</MenuItem>
                            <MenuItem id="calorieScore" value={3}>normal sour</MenuItem>
                            <MenuItem id="calorieScore" value={4}>high sour</MenuItem>
                            <MenuItem id="calorieScore" value={5}>very high sour</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="quest">
                        <InputLabel className="from-title">Calorie Level</InputLabel>
                        <FormControl className="from-input">
                            <InputLabel>Please enter calorie level</InputLabel>
                            <Select
                            name="calorieScore"
                            id="calorieScore"
                            onChange={handleChange}
                            value={state.calorieScore}
                            >
                            <MenuItem id="calorieScore" value={1}>very low calorie</MenuItem>
                            <MenuItem id="calorieScore" value={2}>low calorie</MenuItem>
                            <MenuItem id="calorieScore" value={3}>normal calorie</MenuItem>
                            <MenuItem id="calorieScore" value={4}>high calorie</MenuItem>
                            <MenuItem id="calorieScore" value={5}>very high calorie</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div className="quest">
                        <Button type="submit" className="btnsubmit" variant="outlined" onClick={handleSubmitClick}>Find Menu</Button> 
                    </div>
                </div>
                <div className="result-wraper">
                    <div className="result-container">
                        {
                            resultCondition ?
                            <p>Result:</p>
                            :
                            ''
                        }
                        {
                            resultCondition ?
                            <div className="result">
                                {
                                    isLoading ?
                                    <CircularProgress />
                                    :

                                    <div className="result">
                                        { 
                                            sorted.map((result, index) => ( index >= 9 ?
                                                '' : (<CardMenu 
                                                        key={index} 
                                                        price={result.price} 
                                                        title={result.menutitle} 
                                                        image={result.pic} 
                                                        rank={index+1} 
                                                        data={result._id} />)
                                            ))
                                        }
                                    </div>
                                    
                                }
                            </div>
                            :
                            <p>please fill the form </p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rekomendasi
