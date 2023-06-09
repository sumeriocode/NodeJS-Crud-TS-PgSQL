CREATE DATABASE todo;
CREATE SCHEMA todo;

CREATE TABLE todo.todo (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  active BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO todo.todo (name, active, created_at, updated_at)
VALUES
  ('Task 1', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 2', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 3', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 4', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 5', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 6', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 7', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 8', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 9', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Task 10', false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
