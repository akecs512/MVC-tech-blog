-- MySQL dump 10.13  Distrib 8.0.33, for macos11.7 (arm64)
--
-- Host: localhost    Database: traveler_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('ai74hFj_7y1fTO-B2rfMtHatEb7gb7GQ','2023-08-19 18:42:40','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:41:07.734Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 18:11:07','2023-08-19 18:12:40'),('aPjyLWTbWSvIYavwgihxYEqMv8nRNPn6','2023-08-19 18:06:30','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:06:30.443Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:36:30','2023-08-19 17:36:30'),('fZFVr0lUxf6CXmtBAYSvAuDrAMMUcaeV','2023-08-19 18:06:30','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:06:30.444Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:36:30','2023-08-19 17:36:30'),('GrUGX_lzCCqq1XKUwTir4N2XrhNH4E70','2023-08-19 18:03:38','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T17:54:39.898Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:24:39','2023-08-19 17:33:38'),('ikuByOgsuANl8CQVlwJMm-EkBnLfQSgw','2023-08-19 18:06:30','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:06:30.394Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:36:30','2023-08-19 17:36:30'),('KQk4glhgnFTHXyiIvvOdWO1gyNCOg_K4','2023-08-19 18:06:30','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:06:30.446Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:36:30','2023-08-19 17:36:30'),('Ms0Wfj-Z5V2qfaL-k_PeYXbawK9IIfD8','2023-08-19 18:07:20','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:07:19.990Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:37:19','2023-08-19 17:37:20'),('S2jItldYtBpoYeQw15LWtvLLQ8FJQGFy','2023-08-19 18:06:30','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:06:30.442Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:36:30','2023-08-19 17:36:30'),('VRLwkubK14yxWxDuVCnrC-QMLc8qozwN','2023-08-19 18:08:18','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:08:18.061Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:38:18','2023-08-19 17:38:18'),('wDRGRM_IVHGMAoWUxjopOKY5HsQCunTS','2023-08-19 18:34:12','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:08:28.451Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:38:28','2023-08-19 18:04:12'),('wg2YWhE9SfUtES4yHiDNdQM79p6N8LU7','2023-08-19 18:06:57','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:06:57.059Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:36:57','2023-08-19 17:36:57'),('yT7v1HjwQWJ2C_RxRJVnrUnDprz1QiMD','2023-08-19 18:07:19','{\"cookie\":{\"originalMaxAge\":1800000,\"expires\":\"2023-08-19T18:07:19.964Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"strict\"}}','2023-08-19 17:37:19','2023-08-19 17:37:19');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travel_info`
--

DROP TABLE IF EXISTS `travel_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travel_info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `note` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `travel_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travel_info`
--

LOCK TABLES `travel_info` WRITE;
/*!40000 ALTER TABLE `travel_info` DISABLE KEYS */;
INSERT INTO `travel_info` VALUES (1,'New York','2023-08-02 00:00:00', '2023-08-02 00:00:00','statue',NULL,'2023-08-18 20:39:44','2023-08-18 20:39:44'),(2,'austin','2023-08-02 00:00:00','2023-08-02 00:00:00','downtown',NULL,'2023-08-18 21:35:17','2023-08-18 21:35:17');
/*!40000 ALTER TABLE `travel_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user00','user00@mail.com','$argon2id$v=19$m=4096,t=3,p=1$mW9K/L/BYh8dfQw4PgW9Zg$9h+e0m0ZRCJNNmhDhmKR3XrhbgPUvZ1tb2WgBclOl44ksf6uvCYedg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-19 13:23:40
