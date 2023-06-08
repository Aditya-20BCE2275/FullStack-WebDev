const mongoose = require('mongoose');

// creating connection to a db named Adidb
mongoose.connect("mongodb://localhost:27017/Adidb", { useNewUrlParser: true });
mongoose.set('strictQuery', true);

const Adischema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});


// The model Passes the collection instance and schema to follow
const Adi = mongoose.model("Adi", Adischema);

const adi = new Adi({
    name: "AdiClone1",
    rating: 9,
    review: "Pretty good trial"
});

// It saves or basically inserts the adi we have created thus it will save adi as many times as we run the program hence we comment it out 
// adi.save();

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 100
    },
    favClone: Adischema
});

const Person = mongoose.model("Person", peopleSchema);

const John = new Person({
    name: "John",
    age: 32,
    favClone: adi
});
John.save();

const Emily = new Person({
    name: "Emily",
    age: 23
});

const Tom = new Person({
    name: "Tom",
    age: 34
});

// Tom.save();

// Person.insertMany([John, Emily, Tom]).then(function () {
//     console.log("successfully saved to DB");
// }).catch((err) => {
//     console.log(err);
// });

Person.find().then(function (data) {
    data.forEach(function (p) {
        console.log(p);
        // mongoose.connection.close();
    });
}).catch(function (err) {
    console.log(err);
});

// Person.updateOne({ name: "NewTom" }, { Newname: "NewsTom" }).then(() => {
//     console.log("Successfully updated the data");
// }).catch((err) => {
//     console.log(err);
// });

Person.deleteMany({ name: "John" }).then(() => {
    console.log("Successfully deleted the record");
}).catch((err) => {
    console.log(err);
})

const adiv2 = new Adi({
    name: "ADi2",
    rating: 23,
    review: "Pretty solid"
});

// Person.updateOne({ name: "Emily" }, { favClone: adiv2 }).then(() => {
//     console.log("AdiVersion2 Created");
// }).catch((err) => {
//     console.log(err);
// });