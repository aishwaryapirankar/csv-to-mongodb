const Movie = require('./model/Movie');
const mongoose = require('mongoose');
const csv = require('csvtojson');

const main = async() => {
    const jsonArray=await csv().fromFile('movies.csv');
    console.log(jsonArray);

    const con = await mongoose.connect('mongodb://localhost:27017/movie-info', { useNewUrlParser: true, useUnifiedTopology: true});

    try{
        await Movie.insertMany(jsonArray, (err, res) => {
            console.log('Rows inserted successfully!');
            con.disconnect();
        })
    }

    catch(err){
        console.log(err);
    }
}

main();