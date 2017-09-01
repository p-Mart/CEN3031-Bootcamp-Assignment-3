/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listings = require('./listings.json'),
    config = require('./config.js');

/* Connect to your database */
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri, {useMongoClient : true});

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: "Library West"}, function(err, result){
      if(err) throw err;

      console.log(result);    
   });

};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.find({code: "CABL"}, function(err, result){
      if(err) throw err;

      console.log(result);
      Listing.remove({code: "CABL"}, function(err){
          if(err) throw err;
      });

   });

   

};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   var n = "Phelps Laboratory";
   var a = "Phelps Lab, Gainesville, FL 32603"

   Listing.findOneAndUpdate({name: n}, {address: a}, {new: true}, function(err, result){
      if(err) throw err;

      console.log(result);
   });

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err, result){
      if(err) throw err;
      console.log("HI");
      console.log(result);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

