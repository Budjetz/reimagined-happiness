const app = require('./index.js');
const db = app.get('db');
// const config = require('./config.js')
var AWS = require('aws-sdk');

var s3config = {
  accessKeyId: "AKIAJDDLMBIFFIUWYCEA",
  bucket: {},
  bucketName: "com.thinkcrazy.ionicimageupload",
  bucketUrl: "https://s3.amazonaws.com/com.thinkcrazy.ionicimageupload/",
  file: {},
  region: "us-east-1",
  secretAccessKey: "gCF19auerZBOx9IvpPpKAlCJYbD0yUo+bLyNB+wA",
  sizeLimit: 10485760,
  uploadProgress: 0
};
AWS.config.update(s3config
//   {
//     accessKeyId: Keys.amazonAccess
//   , secretAccessKey: Keys.amazonSecret
//   , region: Keys.amazonRegion
// }
);
var s3 = new AWS.S3();

module.exports = {


  getUser: (req, res) => {
    console.log(req.user);
    res.send(req.user);
  },
  getImage: (req,res) => {
    db.get_image((err,resp) => {
      // console.log(req.user);
      res.json(resp);
    })
  },
  getExpenditures: (req,res) => {
    db.get_expenditures((err,resp) => {
       res.json(resp);
    })
  },
  getBudgets: (req,res) => {
    db.get_budgets((err,resp) => {
      res.json(resp);
    })
  },
  getUsers: (req,res) => {
    db.get_users((err,resp) => {
      res.json(resp);
    })
  },
  getMoneyTotal: (req,res) => {
    db.get_money_total((err,resp) => {
      res.json(resp);
    })
  },
  getBudgetExpenditures: (req,res) => {
    db.get_budget_and_expenditures((err,resp) => {
      var allData = [];
      var categories = [];
      var budget_amounts = [];
      var expenditures = [];

      resp.filter( (val) => {
        if(categories.indexOf(val.category) === -1){
          categories.push(val.category);
          budget_amounts.push(val.budget_amount);
        }
      });
      for(var j = 0; j < categories.length; j++){
        expenditures.push(0);
      };
      resp.filter( (val) => {
        for(var i = 0; i < categories.length; i++){
          if(val.category === categories[i]){
            expenditures[i] += val.amount;
          }
        }
      });
      for(var z = 0; z < categories.length; z++){
        data = {}
        data.name = categories[z];
        data.expenditures = expenditures[z];
        data.budget_amount = budget_amounts[z];
        allData.push(data);
      }
      res.json(allData);

    })
  },
  addExpenditure : (req,res) => {
    var makeBudget = [];
     db.get_budgets( (err,resp) => {
      makeBudget = resp.filter(val => {
        return (val.category == req.body.category)
      })
    if(makeBudget[0] == undefined){
      db.add_budget([req.body.category, req.body.amount], (err,resp) => {});
    }
      db.add_expenditure([req.body.user_id, req.body.category, req.body.amount , req.body.date , req.body.notes , req.body.location], (err,resp) => {})
      res.json(resp)
    })
  },
  getSpecificExpenditure : (req,res) => {
    db.get_specific_expenditures([req.body.category],(err,resp) => {
      res.json(resp);
    })
  },
  editBudget : (req,res) => {
    db.edit_budgets([req.body.category, req.body.newAmount],(err,resp) => {
      res.json(resp);
    })
  },
  deleteBudget: (req,res) => {
    db.delete_budget([req.body.category], (err, resp) => {
      db.delete_budget_expenditures([req.body.category],(err, resp)=>{
        res.json('deleted');
      });
    });
  },
  deleteEmptyBudget: (req,res) => {
    db.delete_empty_budget((err, resp) => {
      res.json('deleted');
    })
  },
  addBudget: (req,res) => {
    db.add_budget([req.body.category, req.body.budget_amount], (err,resp) => {
      res.json(resp);
    })
  },
  editExpenditure : (req, res) => {
    db.edit_expenditure([req.body.category, req.body.amount, req.body.notes, req.body.location, req.body.date,],(err,resp) => {
      res.json(resp);
    })
  },
  deleteExpenditure : (req, res) => {
    db.delete_expenditure([req.body.category, req.body.amount, req.body.date ],(err,resp) => {
      res.json(resp);
    })
  },

  setTotalBudget : (req, res) => {
    db.set_total([req.body.total], (err, resp) => {
      res.json(resp);
    })
  },

  postS3 : (req, res) => {
    var buf = new Buffer(req.body.fileread.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    // bucketName var below crates a "folder" for each user
    var params = {
        Bucket: "com.thinkcrazy.ionicimageupload"
      , Key: req.body.fileName
      , Body: buf
      , ContentType: req.body.fileType
      , ACL: 'public-read'
    };

    s3.upload(params, function (err, data) {
      if (err) return res.status(500).send(err);

      console.log(data.Location);
      // hard coded for now for user 9, need to fix so can call on req.user.id:
      db.add_image([9, req.body.fileName, data.Location], function(err, image){
        console.log(err);
        console.log(req.user);
  //full product with new id returned
          res.json(data.Location);
      });
      // res.json(data);
    });

  }

}
