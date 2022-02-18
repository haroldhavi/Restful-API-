Restfuk API with Nodejs, Postgres & Angular 

Requerimientos
git>
nodejs > 10.15.0
angular 10
postgresql

Instrucciones para correr aplicativo:

1. Generar base de datos local:

CREATE DATABASE persondb;

create user root with encrypted password '123456';

grant all privileges on database persondb to root;

LOGIN IN POSTGRES WITH THE DATA GENERATED 


CREATE TABLE person (
    id SERIAL PRIMARI KEY,
    fullname TEXT UNIQUE NOT NULL,
    birth date,
    father TEXT,
    mother TEXT,
);

2. Instale dependencias con: 
npm install

3. Correr el aplicativo:
npm run dev

