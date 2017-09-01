'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listings = require('./listings.json'),
    config = require('./config.js');

/* Connect to your database */
mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri, {useMongoClient : true});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 console.log(listings.entries.length);
for(var i = 0; i < listings.entries.length; i++){
    var listing = Listing(listings.entries[i]);
    console.log(listings.entries[i].code);
    listing.save(function(err) {
        if(err) throw err;

    });
    //console.log(i);
}
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */