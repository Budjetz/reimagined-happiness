const app = require('./index.js');
const db = app.get('db');
// const config = require('./config.js')

module.exports = {

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
      db.add_budget([req.body.category], (err,resp) => {});
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
  editBudgets : (req,res) => {
    db.edit_budgets([req.body.current, req.body.update],(err,resp) => {
      res.json(resp);
    })
  }




}
// connectionString=postgres://xlbxbzkn:GkwWZ__uyE_KARHvvn52msM_NwZyQCov@elmer.db.elephantsql.com:5432/xlbxbzkn facebookId=717293048429695 facebookSecret=85809ca3ed55957e3175ade809065c25 npm start
