const router = require("express").Router();
const Menu = require("../models/Menu");
const verify = require("../verifyToken");


//CREATE
router.post("/add", verify, async (req,res)=>{
    if(req.user.id === req.params.id || req.user.role ){
        const newMenu = new Menu(req.body);


        try {
            const savedMenu = await newMenu.save();
            res.status(200).json(savedMenu);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allow add menu!")
    }
});

//UPDATE
router.put("/:id", verify, async (req,res)=>{
    if(req.user.role ){
        try {
            const updateMenu = await Menu.findById(
                req.params.id, 
                {
                    $set: req.params.body,
                },
                {new:true}
                );
            res.status(200).json(updateMenu);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allow update menu!")
    }
});

//DELETE
router.delete("/:id", verify, async (req,res)=>{
    if(req.user.role ){
        try {
            await Menu.findByIdAndDelete(req.params.id);
            res.status(200).json("Menu Deletes");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
});

//GET Specific
router.get("/:id", verify, async (req,res)=>{
    try {
        const menu = await Menu.findById(req.params.id);
        res.status(200).json(menu);
    } catch (err) {
        res.status(500).json(err)
    }
});

//GET ALL
router.get("/", verify, async (req,res)=>{
    const query = req.query.new;

    if(req.user.role ){
        try {
            const menu = query ? await Menu.find().limit(10) : await Menu.find();
            res.status(200).json(menu);
            
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allow to see users")
    }
});

//GET Random / Specific
router.get("/:id", verify, async (req,res)=>{
    const type = req.query.type;
    let menu;
        try {
            //categori ini isi di path yang di mau 
            if (type === "categori") {
                menu = await Menu.aggregate([
                    //{$match: { data yang di cari tipe boolean: true}},
                    //{$sample: { size: 1 ini data nya mau berapa ganti angka 1 nya} },
                    
                ]);
            }else {
                menu = await Menu.aggregate([
                    //{$match: { data yang di cari tipe boolean: false}},
                    //{$sample: { size: 1 ini data nya mau berapa ganti angka 1 nya} },
                    
                ]);
            }
            res.status(200).json(menu);
        } catch (err) {
            res.status(500).json(err)
        }
});

module.exports = router;