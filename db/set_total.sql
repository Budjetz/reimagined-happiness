UPDATE money_total
SET amount = $1
WHERE user_id = 3
RETURNING *;
