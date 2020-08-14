DROP DATABASE IF EXISTS `festival_db`;
CREATE DATABASE `festival_db`;

USE festival_db;

CREATE TABLE users_table (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(45) NOT NULL,
  friend_one INT NOT NULL,
  friend_two INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE artist_table (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist INT NOT NULL,
  user_choice INT NOT NULL,
  PRIMARY KEY (id)
  FOREIGN KEY (user_choice) REFERENCES users_table(id)
);