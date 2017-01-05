DELETE FROM expenditures
WHERE category = $1
AND amount = $2
AND date = $3
