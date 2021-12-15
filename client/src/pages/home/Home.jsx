import './home.scss'
//import { AcUnit } from '@material-ui/icons'
import React from 'react'
import { ambianceimg, ambianceimg2, ambianceimg3, logoRekomendasi, reviewapp } from '../../assets'
import {  CardMenu, CardRekomU } from '../../components/specific'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import {  useSelector } from 'react-redux'
import { selectRestoMenu} from '../../redux/restoSlice'






const Home = () => {
    const fakeMenu= useSelector(selectRestoMenu);
    const imgAmbiance = [ambianceimg, ambianceimg2, ambianceimg3];
    
    // const fakeMenu = [
    //     { "title": "Sate Padang", "img": "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
    //     { "title": "Nasi Kuning Sekut", "img": "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
    //     { "title": "Indomie Mantab", "img": "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
    //     { "title": "Martabokk", "img": "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
    //     ];

    
    
    
    console.log(fakeMenu);
    return (
        <div className="home">
            
                <div className="wraper-home">
                    
                    <div className="wraper">
                        <div className="content1-text">
                            <CardRekomU tittle={"Decide a Menu"} to={'menu'}/>
                        </div>
                        <div className="conten1-img">
                            <img src={logoRekomendasi} alt="tes"></img>
                        </div>
                    </div>

                    <div className="wraper">
                        <div className="conten2-img">
                            {
                                fakeMenu.map((fakeMenu, index) => (
                                    <CardMenu key={index} price={fakeMenu.price} title={fakeMenu.menutitle} image={fakeMenu.pic} home={true} />
                                ))
                            }
                        </div>
                        <div className="content1-text">
                            <h3 className="title-content">Our Top 4 Menu by Customer Review</h3>
                            
                        </div>
                    </div>

                    <div className="wraper-center">
                        <h3 className="title-content" >Ambiance</h3>
                        <p>Toodz House Cafe</p>
                        <div className="slide-wraper">
                            <div className="slide-container">
                                <Fade>
                                    {imgAmbiance.map((imgAmbiance, index) => (
                                        <div className="each-fade" key={index}>
                                        <div >
                                          <img src={imgAmbiance} alt="ambiance-toodz" />
                                        </div>
                                      </div>
                                    ))}
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="wraper">
                        <div className="content1-img">
                            <img className="webapp-img" src={reviewapp} alt="review-webapp-img" />
                        </div>
                        <div className="content1-text">
                            <h3 className="title-content">Review our webapp’s and Recomendations</h3>
                            <p>In order to improve our website and 
                                recomendation’s feuture, we do need a some 
                                review from you</p>
                        </div>
                    </div>

                    
          
                </div>
                {/* <div className="wraper-home">
                    <Box  className="boxs">
                        <h3>Our Top 4 Menu by Customer Review</h3>
                    </Box>
                </div>       */}

           
        </div>
    )
}

export default Home
