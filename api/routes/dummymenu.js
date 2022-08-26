const router = require("express").Router();
const Menu = require("../models/Menu");

//GET ALL
// router.get("/", (req,res)=>{
//     const categorie = req.query.categorie;
    
//     let menu;
//         try {
//             menu = [
//                 {"nama": "geza" },
//                 {"nama": "adella" }
//             ]
            
//             res.status(200).json(menu);
//             // const menu = query ? await Menu.find().limit(10) : await Menu.find();
//             // res.status(200).json(menu);
            
//         } catch (err) {
//             res.status(500).json(err)
//         }
// });



//GET ALL
router.get("/", async (req,res)=>{
    const categorie = req.query.categorie;
    
    let menu;
        try {
            menu = await Menu.find();
            console.log("Masuk Menu: ", menu);
            res.status(200).json(menu);
            // const menu = query ? await Menu.find().limit(10) : await Menu.find();
            // res.status(200).json(menu);
            
        } catch (err) {
            res.status(500).json(err)
        }
});


module.exports = router;