-- MySQL dump 10.13  Distrib 5.6.24, for osx10.8 (x86_64)
--
-- Host: 127.0.0.1    Database: service_center
-- ------------------------------------------------------
-- Server version	5.6.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `make` varchar(45) NOT NULL,
  `model` varchar(45) NOT NULL,
  `year` year(4) NOT NULL,
  `VIN` varchar(45) NOT NULL,
  `client_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`client_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_cars_clients_idx` (`client_id`),
  CONSTRAINT `fk_cars_clients` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'Chevrolet','Silverado 1500',2008,'1GCEC14X38Z183492',2),(2,'Mersedes-Benz','E-Class',2003,'WDBUF65J33A257784',3),(3,'Ford','Fusion',2014,'3FA6P0HDXER130345',4),(4,'Nissan','Altima',2013,'1N4AL3AP9DC900396',3),(5,'Chevrotet','Camaro',2015,'2G1FJ1EW6F9152317',1),(6,'Toyota','Sequoia',2006,'5TDBT48A76S272541',5),(7,'Chrysler','Town & Country',2008,'2A8HR54PX8R121125',3);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `birthday` date DEFAULT NULL,
  `address` text,
  `phone` text,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Hans','Gunter','1994-06-04','Minsk, Kalvariyskaya, 46-50','+375291084414','hans_fedorovich@mail.ru'),(2,'Valentin','Ardelyanov','1993-07-26','Minsk, Derjinskogo, 152-3','+375291200982','ardelyan_12@mail.ru'),(3,'Mariya','Dounar','1990-03-27','Minsk, Derjinskogo, 123-65','+375291758969','maryyy_d@yandex.ru'),(4,'Roman','Bazylchik','1991-10-12','Minsk, Kamennogorskaya, 168-12','+375447896523','roman_baz@gmail.com'),(5,'Dmitry','Severnyov','1985-12-13','Minsk, Pushkina, 32-47','+375447235986','dimas_god@mail.ru'),(7,'Anton','Malkevich','1993-08-09','Pushkina, 32-41','+375336589685','antos9@yahoo.com'),(13,'Elena','Margaeva','1989-06-11','Shishkina, 41-12','+375339862356','lena_marg@rambler.ru'),(14,'Tatsyana','Golubeva','1985-08-19','Biruzova, 15-89','+375296582345','tat_1985@mail.ru'),(22,'Natalya','Vostrova','1963-12-13','Olshevskogo, 5-1-47','+375296550024','vostrova.n@mail.ru');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `cost` float NOT NULL,
  `status` int(11) DEFAULT '1',
  `car_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`car_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_orders_cars1_idx` (`car_id`),
  CONSTRAINT `fk_orders_cars1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2015-10-05 09:43:07',120,1,7),(2,'2015-10-05 09:52:58',14,1,7),(3,'2015-10-05 09:54:20',12,1,7),(4,'2015-10-05 12:58:23',125,1,7),(5,'2015-10-05 12:59:00',12,1,7);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-05 16:06:18
