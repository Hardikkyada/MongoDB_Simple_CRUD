const express = require('express');
const router = express.Router();
router.use(express.json());

const cardata = require("../models/car");

router.get('/', (req, res) => res.send('car page!'))

router.get("/list", async (req, res) => {
	const carlist = await cardata.find();

	if (carlist.length === 0) {
		return res.json({ data: "CAR data not Found" });
	}
	return res.json({ data: carlist });
});


router.post('/addcar',(req,res) => {

	const newproduct = req.body;
	cardata.create(newproduct);
	return res.json({ data: "Car Data Added" });

});

module.exports = router;
/*{
	"car_id":"101",
    "name":"A4 Sedan",
    "rent":"1,20,000",
    "company":"Audi",
    "adv_booking": ["10-12-21"],
    "status": true
},
{
	"car_id":"102",
    "name":"RS5 Sportback",
    "rent":"1,50,000",
    "company":"Audi",
    "adv_booking": ["20-12-21"],
    "status": false
},
{
	"car_id":"103",
    "name":"RS etron GT",
    "rent":"2,50,000",
    "company":"Audi",
    "adv_booking": ["25-12-21","20-01-21"],
    "status": true
},
{
	"car_id":"104",
    "name":"Thar",
    "rent":"1,00,000",
    "company":"Mahindra",
    "adv_booking": ["10-12-21","10-01-21"],
    "status": true
},
{
	"car_id":"105",
    "name":"Creta",
    "rent":"1,50,000",
    "company":"Hyundai",
    "adv_booking": [],
    "status": true
},
{
	"car_id":"106",
    "name":"Land Rover",
    "rent":"1,25,000",
    "company":"Range Rover",
    "adv_booking": [],
    "status": true
},
{
	"car_id":"107",
    "name":"XUV700",
    "rent":"2,50,000",
    "company":"Mahindra",
    "adv_booking": [],
    "status": true
}
,
{
	"car_id":"108",
    "name":"BMW X1",
    "rent":"3,50,000",
    "company":"BMW",
    "adv_booking": [],
    "status": true
},
{
	"car_id":"109",
    "name":"BMW X7",
    "rent":"2,50,000",
    "company":"BMW",
    "adv_booking": [],
    "status": true
},
{
	"car_id":"110",
    "name":"Punch",
    "rent":"1,00,000",
    "company":"TATA",
    "adv_booking": ["20-01-21"],
    "status": true
}*/