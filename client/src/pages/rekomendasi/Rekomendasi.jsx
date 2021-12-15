import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import './rekomendasi.scss'
import { CardMenu } from '../../components/specific'
import CircularProgress from '@material-ui/core/CircularProgress'

const fakeMenu = [
    { "title": "Sate Padang","price": "20000", "img": "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
    { "title": "Nasi Kuning Sekut","price": "20000", "img": "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
    { "title": "Indomie Mantab", "price": "20000","img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
    { "title": "Martabokk", "price": "20000","img": "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
];

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

    const [kepentingState, setKepentingaState]= useState({
        priceScore: 0,
        spicinessScore: 0,
        saltinessScore: 0,
        sweetnessScore: 0,
        calorieScore: 0,
        sourScore: 0
    })

    const [resultData, setResult] = useState([]);
    const [resultCondition, setCondition] = useState(false)
    const [isLoading, setLoading] = useState(false);

    const handleSubmitClick = (e) => {
        e.preventDefault();
        setResult(fakeMenu); //masukan data result kesini
        setCondition(true);
        setLoading(true);
        setKepentingaState({
            priceScore: state.priceScore/state.totalScore,
            spicinessScore: state.spicinessScore/state.totalScore,
            saltinessScore: state.saltinessScore/state.totalScore,
            sweetnessScore: state.sweetnessScore/state.totalScore,
            calorieScore: state.calorieScore/state.totalScore,
            sourScore: state.sourScore/state.totalScore
        })
        setTimeout(() =>{setLoading(false)},3000);
        console.log("sebelum: ",state,"sesudah: ",kepentingState);
    };

    

    const handleChange = (e ) => {
        //e.preventDefault();
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
                            
                            <MenuItem value={1}>1-2</MenuItem>
                            <MenuItem value={2}>2-3</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>3-4</MenuItem>
                            <MenuItem value={5}>4-5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="quest">
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
                    </div>
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
                            resultCondition  ?
                            <div className="result">
                                {
                                    isLoading ?
                                    <CircularProgress />
                                    :
                                    <div className="result">
                                        { 
                                            resultData.map((fakeMenu, index) => (
                                                <CardMenu key={index} price={fakeMenu.price} title={fakeMenu.title} image={fakeMenu.img}/>
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
