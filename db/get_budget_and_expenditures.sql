SELECT e.user_id, e.category, amount, budget_amount FROM expenditures e
JOIN budgets b
ON b.category = e.category
ORDER BY budget_amount
DESC;
