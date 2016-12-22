const app = require('./index.js');
const db = app.get('db');
const config = require('./config.js')

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
      res.json(resp);
    })
  },


}
