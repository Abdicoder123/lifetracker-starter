CREATE TABLE users (
id          SERIAL PRIMARY KEY,
username    TEXT NOT NULL,
password    TEXT NOT NULL,
first_name  TEXT NOT NULL,
last_name   TEXT NOT NULL,
email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN EMAIL) > 1),
created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
updated_at  TEXT NOT NULL
);

CREATE TABLE nutrition (
id          SERIAL PRIMARY KEY,
name        TEXT NOT NULL,
category    TEXT NOT NULL,
calories    INTEGER NOT NULL,
image_url   TEXT NOT NULL,
user_id     INTEGER NOT NULL,
created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercise (
id          SERIAL PRIMARY KEY,
name        TEXT NOT NULL,
category    TEXT NOT NULL,
duration    INTEGER NOT NULL,
user_id     INTEGER NOT NULL,
created_at  TIMESTAMP NOT NULL DEFAULT NOW()
)