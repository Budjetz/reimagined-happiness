UPDATE expenditures
SET category = $1, amount = $2, notes = $3, location = $4
WHERE date = $5
RETURNING *;
