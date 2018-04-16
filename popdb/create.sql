-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema smartfit
-- -----------------------------------------------------
DROP DATABASE `smartfit`;
-- -----------------------------------------------------
-- Schema smartfit
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `smartfit` DEFAULT CHARACTER SET utf8 ;
USE `smartfit` ;

-- -----------------------------------------------------
-- Table `smartfit`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `lastName` VARCHAR(255) NULL,
  `birthDate` DATE NULL,
  `token` VARCHAR(255) NULL,
  `role_id` INT NOT NULL,
  `username` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `gender` VARCHAR(255) NULL,
  `firstTime` TINYINT(1) NULL,
  `image` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC),
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `smartfit`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`routine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`routine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  `image` VARCHAR(255) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`os`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`os` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`device`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`device` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `uuid` VARCHAR(200) NULL,
  `os_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  `model` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_device_user_idx` (`user_id` ASC),
  INDEX `fk_device_os1_idx` (`os_id` ASC),
  CONSTRAINT `fk_device_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `smartfit`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_device_os1`
    FOREIGN KEY (`os_id`)
    REFERENCES `smartfit`.`os` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`muscular_group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`muscular_group` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`muscle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`muscle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  `muscular_group_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_muscle_muscular_group1_idx` (`muscular_group_id` ASC),
  CONSTRAINT `fk_muscle_muscular_group1`
    FOREIGN KEY (`muscular_group_id`)
    REFERENCES `smartfit`.`muscular_group` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`exercise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`exercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `content` LONGTEXT NULL,
  `image` VARCHAR(255) NULL,
  `category_id` INT NOT NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  `video` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_category1_idx` (`category_id` ASC),
  CONSTRAINT `fk_posts_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `smartfit`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`day`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`day` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`routine_has_exercise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`routine_has_exercise` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `routine_id` INT NOT NULL,
  `exercise_id` INT NOT NULL,
  `day_id` INT NOT NULL,
  `image` VARCHAR(255) NULL,
  `reps` INT NULL,
  `sets` INT NULL,
  INDEX `fk_routine_has_exersise_exersise1_idx` (`exercise_id` ASC),
  INDEX `fk_routine_has_exersise_routine1_idx` (`routine_id` ASC),
  INDEX `fk_routine_has_exersise_day1_idx` (`day_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_routine_has_exersise_routine1`
    FOREIGN KEY (`routine_id`)
    REFERENCES `smartfit`.`routine` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_routine_has_exersise_exersise1`
    FOREIGN KEY (`exercise_id`)
    REFERENCES `smartfit`.`exercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_routine_has_exersise_day1`
    FOREIGN KEY (`day_id`)
    REFERENCES `smartfit`.`day` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`user_has_routine`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`user_has_routine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `routine_id` INT NOT NULL,
  `active` TINYINT(1) NULL,
  `startDate` DATE NULL,
  `endDate` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_has_routine_routine1_idx` (`routine_id` ASC),
  INDEX `fk_user_has_routine_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_routine_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `smartfit`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_routine_routine1`
    FOREIGN KEY (`routine_id`)
    REFERENCES `smartfit`.`routine` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`exercise_has_muscle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`exercise_has_muscle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `exercise_id` INT NOT NULL,
  `muscle_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_exercise_has_muscle_muscle1_idx` (`muscle_id` ASC),
  INDEX `fk_exercise_has_muscle_exercise1_idx` (`exercise_id` ASC),
  CONSTRAINT `fk_exercise_has_muscle_exercise1`
    FOREIGN KEY (`exercise_id`)
    REFERENCES `smartfit`.`exercise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exercise_has_muscle_muscle1`
    FOREIGN KEY (`muscle_id`)
    REFERENCES `smartfit`.`muscle` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`diet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`diet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `createdAt` DATETIME NULL,
  `modifiedAt` DATETIME NULL,
  `image` VARCHAR(255) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `smartfit`.`user_has_diet`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smartfit`.`user_has_diet` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `diet_id` INT NOT NULL,
  `active` TINYINT(1) NULL,
  `startDate` DATE NULL,
  `endDate` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_has_diet_diet1_idx` (`diet_id` ASC),
  INDEX `fk_user_has_diet_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_diet_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `smartfit`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_diet_diet1`
    FOREIGN KEY (`diet_id`)
    REFERENCES `smartfit`.`diet` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
