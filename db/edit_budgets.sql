UPDATE budgets
SET budget_amount = $2, category = $3
WHERE category = $1
RETURNING *;
