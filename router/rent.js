const express = require('express');
const router = express.Router();
router.use(express.json());


const carrentdata = require("../models/rent");

router.get('/', (req, res) => res.send('carRent page!'))

router.get("/list", async (req, res) => {
    const carlist = await carrentdata.find();

    if (carlist.length === 0) {
        return res.json({ data: "CarRent data not Found" });
    }
    return res.json({ data: carlist });
});


router.post('/addcarrent', (req, res) => {

    const newproduct = req.body;
    carrentdata.create(newproduct);
    return res.json({ data: "CarRent Data Added" });

});

module.exports = router;

/*{
    "rent_id":"240",
    "car_id": "101",
    "customer_id": "453",
    "strat_date": "05-12-21",
    "end_date": "10-12-211",
    "payment_satus":"done"
},
{
    "rent_id":"452",
    "car_id": "106",
    "customer_id": "423",
    "strat_date": "10-12-21",
    "end_date": "12-12-211",
    "payment_satus":"not done"
},
{
    "rent_id":"753",
    "car_id": "105",
    "customer_id": "785",
    "strat_date": "29-12-21",
    "end_date": "31-12-211",
    "payment_satus":"done"
}*/