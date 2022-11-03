-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  band VARCHAR NOT NULL,
  album VARCHAR NOT NULL,
  year INT NOT NULL,
  length VARCHAR NOT NULL
);

INSERT INTO
  songs (name, band, album, year, length)
VALUES
  (
    'Third Eye',
    'TOOL',
    'Aenima',
    1996,
    '13:47'
  ),
  (
    'Come as You Are',
    'Nirvana',
    'Nevermind',
    1991,
    '3:39'
  ),
  (
    '7empest',
    'TOOL',
    'Fear Inoculum',
    2019,
    '13:47'
  ),
  (
    'Frizzle Fry',
    'Primus',
    'Frizzle Fry',
    1990,
    '6:04'
  ),
  (
    'Heart Shaped Box',
    'Nirvana',
    'In Utero',
    1993,
    '4:41'
  ),
  (
    'Pushit',
    'TOOL',
    'Aenima',
    1996,
    '9:55'
  ),
  (
    'Smells Like Teen Spirit',
    'Nirvana',
    'Nevermind',
    1991,
    '5:01'
  ),
  (
    'Here Come the Bastards',
    'Primus',
    'Sees of Cheese',
    1991,
    '2:55'
  );
