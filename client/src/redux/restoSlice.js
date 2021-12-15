import { createSlice } from '@reduxjs/toolkit'


export const restoSlice = createSlice({

    name: "Toodz house",
    initialState: {
        name: "",
        menu: [
            // {   title: "Sate Padang", price: 20000, food_id: 1, categories: "Food", img: "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
            // {   title: "Nasi Kuning Sekut Banget Deh Pokok Nya", price: 20000, food_id: 2, categories: "Food", img: "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
            // {   title: "Indomie Mantab", price: 20000, food_id: 3, categories: "Sides", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
            // {   title: "Martabokk", price: 20000, food_id: 4, categories: "Dessert", img: "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
            // {   title: "Sosise", price: 20000, food_id: 5, categories: "Sides", img: "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
            // {   title: "Sate Padang", price: 20000, food_id: 6, categories: "Food",  img: "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
            // {   title: "Nasi Kuning Sekut",price: 20000, food_id: 7, categories: "Kids Meal", img: "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
            // {   title: "Indomie Mantab", price: 20000, food_id: 8, categories: "Sides", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
            // {   title: "Martabokk2", price: 20000, food_id: 9, categories: "Dessert", img: "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
            // {   title: "Sosise", price: 20000, food_id: 10, categories: "Sides", img: "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
            // {   title: "Nasi Kuning Sekut", price: 20000, food_id: 11, categories: "Kids Meal", img: "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
            // {   title: "Indomie Mantab", price: 20000, food_id: 12, categories: "Sides", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
            // {   title: "Martabokk3", price: 20000, food_id: 13, categories: "Dessert", img: "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
            // {   title: "Sosise Tapi Salad", price: 20000, food_id: 14,categories: "Salad", img: "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
            // {   title: "Soup Indomie Mantab", price: 20000,food_id: 15,categories: "Soup", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" }
        ]
    },
    reducers: {
        setResto: (state, action) =>{
            state.name = action.payload.name;
            state.menu = action.payload.menu;
        },
        setMenu: (state, action) =>{
            state.menu = action.payload.menu;
            //console.log(action.payload.menu)
        }
    },
});

export const { setResto , setMenu} = restoSlice.actions;

// export const loadRestoAsync = () => (dispatch) => {
//     setTimeout(()=>{
//         const name = "Toods House";
//         const menu = [
//             {   title: "Sate Padang", price: 20000, food_id: 1, categories: "Food", img: "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
//             {   title: "Nasi Kuning Sekut", price: 20000, food_id: 2, categories: "Food", img: "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
//             {   title: "Indomie Mantab", price: 20000, food_id: 3, categories: "Sides", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
//             {   title: "Martabokk", price: 20000, food_id: 4, categories: "Dessert", img: "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
//             {   title: "Sosise", price: 20000, food_id: 5, categories: "Sides", img: "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
//             {   title: "Sate Padang", price: 20000, food_id: 6, categories: "Food",  img: "https://img.inews.co.id/media/822/files/inews_new/2021/05/18/mencicipi_makanan_khas_indonesia.jpg" },
//             {   title: "Nasi Kuning Sekut",price: 20000, food_id: 7, categories: "Kids Meal", img: "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
//             {   title: "Indomie Mantab", price: 20000, food_id: 8, categories: "Sides", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
//             {   title: "Martabokk2", price: 20000, food_id: 9, categories: "Dessert", img: "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
//             {   title: "Sosise", price: 20000, food_id: 10, categories: "Sides", img: "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
//             {   title: "Nasi Kuning Sekut", price: 20000, food_id: 11, categories: "Kids Meal", img: "https://cdnt.orami.co.id/unsafe/cdn-cas.orami.co.id/parenting/images/makanan-khas-nusantara.width-800.jpegquality-80.jpg" },
//             {   title: "Indomie Mantab", price: 20000, food_id: 12, categories: "Sides", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" },
//             {   title: "Martabokk3", price: 20000, food_id: 13, categories: "Dessert", img: "https://ik.imagekit.io/tvlk/blog/2020/01/81253141_133608488117799_3264343446726517802_n.jpg"},
//             {   title: "Sosise Tapi Salad", price: 20000, food_id: 14,categories: "Salad", img: "https://foto.kontan.co.id/mLO3JF3kQK6EIfFz7rSx41eAtHA=/smart/2020/12/24/162674279p.jpg"},
//             {   title: "Soup Indomie Mantab", price: 20000,food_id: 15,categories: "Soup", img: "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg" }
//         ];
//         dispatch(setResto({ name, menu}));
//         console.log(menu)
        
//     },500);
    
// };


export const selectRestoName = state => state.resto.name;
export const selectRestoMenu = state => state.resto.menu;

export default restoSlice.reducer