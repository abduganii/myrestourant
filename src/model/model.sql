CREATE DATABASE restourants;
CREATE EXTENSION "uuid-ossp";

CREATE TABLE cotegory(
    cotegory_id uuid default uuid_generate_v4() PRIMARY KEY,
    cotegory varchar(40)
);

CREATE TABLE allrestourants(
    restourant_id uuid default uuid_generate_v4() PRIMARY KEY,
    restourant_name varchar(50) not null,
    restourant_img varchar(300)  not null,
    cotegory_id uuid REFERENCES cotegory(cotegory_id) not null
);

CREATE TABLE Foods(
    food_id uuid default uuid_generate_v4() PRIMARY KEY,
    food_name varchar(40) not null,
    food_price varchar(40) not null,
    food_img varchar(400) not null,
    restourant_id uuid REFERENCES allrestourants(restourant_id) not null
);