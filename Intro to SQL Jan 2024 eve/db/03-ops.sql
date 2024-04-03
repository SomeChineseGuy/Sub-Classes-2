-- Basic Seleted
-- Meaning of EVERYTHING is 42 - 42 in ASCII => *

-- SELECT * FROM jokes;

-- SELECT question FROM jokes;
-- SELECT question, answer FROM jokes;
-- SELECT * FROM authors;

-- Rename Columns
-- SELECT question AS joke_question, answer AS joke_answer FROM jokes; 

-- Filtering

SELECT * FROM jokes 
WHERE rating > 4 
and author_id IS NOT NULL;

-- const obj = {a: 1, b:2}
-- console.log(obj.a)
-- console.log(obj["a"])
SELECT jokes.question, jokes.answer
FROM jokes;

-- Order By 

SELECT * FROM jokes ORDER BY rating DESC;
SELECT * FROM jokes ORDER BY rating ASC;

-- Filtering by Text
SELECT * FROM jokes WHERE question = 'What';
SELECT * FROM jokes WHERE question LIKE 'what%';
SELECT * FROM jokes WHERE question LIKE '% call %';
SELECT * FROM jokes WHERE question LIKE 'A%';
SELECT * FROM jokes WHERE question LIKE '% a %';

-- str.toLowerCase()
SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%';
SELECT * FROM jokes WHERE question ILIKE 'what%';

-- Joining Tables
SELECT * FROM jokes JOIN authors ON author_id = authors.id;

SELECT jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes
RIGHT JOIN authors ON author_id = authors.id;

-- Aggregate functions

-- AVG
-- COUNT
SELECT COUNT(author_id) FROM jokes;

SELECT AVG(rating) FROM jokes;

SELECT * FROM JOKES WHERE author_id IS NOT NULL;
-- [{}].length

SELECT 
  author_id,
  AVG(rating) AS average_joke_rating
FROM jokes
WHERE author_id IS NOT NULL
GROUP BY author_id
HAVING AVG(rating) > 3
ORDER BY author_id;