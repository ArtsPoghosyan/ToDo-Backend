const mongoose = require("mongoose");

(async function(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    }catch(err){
        console.error(err);
    }
})();

module.exports = {mongoose};