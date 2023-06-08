const mongoose = require('mongoose');

// MongoDB database connnection
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });
mongoose.set('strictQuery', true);

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name of the fruit before entering the data"]
    },
    rating: {
        type: Number,
        required: [true, "Please enter your rating"]
    },
    review: String
});

const Fruit = new mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Kiwi ftw"
});

// fruit.save();

const peopleSchema = new mongoose.Schema({
    name: String,
    adhaarId: Number,
    address: String,
    favoriteFruit: fruitSchema
});

const Person = new mongoose.model("Person", peopleSchema);

const person = new Person({
    name: "Amy",
    adhaarId: 27082002,
    address: "Sukhshanti soc, sector 10 , Airoli, Navi Mumbai - 400708",
    favoriteFruit: fruit
});

// person.save();

const ok = new Person({
    name: "Harsh",
    adhaarId: 20342032,
    address: "Jaipur, Rajasthan , India"
});
const ok1 = new Person({
    name: "Priyansh",
    adhaarId: 20092032,
    address: "Jaipur, Rajasthan , India"
});
const ok2 = new Person({
    name: "Ekjot",
    adhaarId: 93204823,
    address: "Vadodra, Gujrat , India",
});

ok2.newfeild = "im trying ";

Person.insertMany([ok,ok1,ok2],function (err) {
    if(err)
    {
        console.log("error occured");
    }    
    else
    {
        console.log("Successfully saved people");
    }
});


// Person.updateOne({ name: "Ekjot" }, { favoriteFruit: fruit }, (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully updated");
//     }
// });

// Person.deleteOne({name:"Harsh"},function(err){
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log("Harsh is deleted from exsistence");
//     }
// })

Person.find(function (err, persons) {
    if (err) {
        console.log(err);
    }
    else {
        // mongoose.connection.close();
        for (let x of persons) {
            console.log(x.newfeild);
        }
    }
});