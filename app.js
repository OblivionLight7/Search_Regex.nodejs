const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./medicines')
mongoose.connect(
    "mongodb://dbUser1:admin123@cluster0-shard-00-00.irla6.mongodb.net:27017,cluster0-shard-00-01.irla6.mongodb.net:27017,cluster0-shard-00-02.irla6.mongodb.net:27017/Medicine?ssl=true&replicaSet=atlas-neflbj-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("Connected DB");
  });

  app.get("/search/:Name",function(req,res){
      var regex = new RegExp(req.params.Name,'i');
      User.find({Name:regex}).then((result)=>{
          res.status(200).json(result)
      })
  })

app.listen(8081)