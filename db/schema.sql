CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fb_id  TEXT NOT NULL,
  name TEXT,
  pic TEXT
);

CREATE TABLE money_total (
  user_id INTEGER REFERENCES users(id),
  amount INTEGER
);

CREATE TABLE expenditures (
  user_id INTEGER REFERENCES users(id),
  category TEXT,
  amount INTEGER,
  date TEXT,
  notes TEXT,
  location TEXT
);

CREATE TABLE budgets (
  user_id INTEGER REFERENCES users(id),
  category TEXT,
  budget_amount INTEGER
);
