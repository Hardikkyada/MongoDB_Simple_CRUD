require("dotenv").config();
const express = require('express')
const app = express()
app.use(express.json());
const port = 8082
const mongoose = require("mongoose");



//connect Model
mongoose.connect(process.env.con).then( () =>
    console.log("mongodb connected.....") 
);

const cardata = require("./models/car");
const carrentdata = require("./models/rent");
const carrouter = require("./router/car");
const carrentrouter = require("./router/rent");


app.get('/', (req, res) => res.send('Welcome page!'))

//fetch car data form name

app.post('/car', async (req, res) => {
    const cname =  req.body.cname;

    const cdata = await cardata.findOne({
        name: cname
    });

    if (cdata) {
        res.json({ "passing product name fetch company details": cdata });
    } else {
        res.json({ data: "Car not found" });
    }
});


//update car status
app.put("/update_car_satus", async (req, res) => {
    const cid = req.body.cid;
    const fstatus = req.body.status;

    const cdata = await cardata.findOne({
        car_id: cid
    });

    if (cdata) {
        const updateuser = await cardata.findOneAndUpdate(
            { car_id: cid },
            { status: fstatus },
            { new: true }
        );
        res.json({ data: "Car Status Update successfully" });
    }
    else {
        res.json({ data: "Car id Not Found" });
    }

    
});

//delete company

app.delete("/delete_car/:name", async (req,res) => {

    const deletecar = await cardata.findOneAndDelete({
        //name: req.body.name,
        name: req.params.name,
    });
    return res.json({ data: "car data deleted successfully" });
});


app.use("/car", carrouter);
app.use("/carrent", carrentrouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
