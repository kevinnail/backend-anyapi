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
    '15:44'
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


DROP TABLE IF EXISTS trees;
CREATE TABLE trees (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  species VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  age VARCHAR NOT NULL
);

INSERT INTO
  trees (name, species, location, age)
VALUES
  (
    'Angel Oak',
    'Southern live oak',
    'Johns Island, South Carolina, near Charleston, South Carolina, US',
    '400-500'
  ),
  (
    'Bedford Oak',
    'White oak ',
    'Bedford, New York',
    '300–500'
  ),
  (
    'Bennett Juniper',
    'Grand juniper',
    'Stanislaus National Forest, Tuolumne County, California US',
    '2,000–6,000'
  ),
  (
    'Grayson Elm',
    'American elm',
    'Amherst, Massachusetts, US',
    '200'
  ),
  (
    'Grizzly Giant',
    'Giant sequoia',
    'Yosemite National Park, California, US',
    '2,995 (+/-250)'
  ),
  (
    'Lone Cypress',
    'Monterey cypress',
    'Pebble Beach, California, US',
    '~250'
  ),
  (
    'Pando',
    'Quaking aspen',
    'Utah, US',
    '<14,000'
  ),
  (
    'Pechanga Great Oak',
    'Coast live oak',
    'Temecula, California, US',
    '1500–2000'
  );
