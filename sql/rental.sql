-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 13, 2020 at 12:41 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db=rental`
--

-- --------------------------------------------------------

--
-- Table structure for table `alpha_laptop`
--

DROP TABLE IF EXISTS `alpha_laptop`;
CREATE TABLE IF NOT EXISTS `alpha_laptop` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `ram` int(10) NOT NULL,
  `os` varchar(25) NOT NULL,
  `display` varchar(10) DEFAULT NULL,
  `hard drive` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alpha_laptop`
--

INSERT INTO `alpha_laptop` (`sno`, `name`, `ram`, `os`, `display`, `hard drive`) VALUES
(1, 'acer', 8, 'windows', NULL, NULL),
(2, 'lenovo', 8, 'linux', NULL, NULL),
(3, 'apple', 6, 'ios', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `beta_mobile`
--

DROP TABLE IF EXISTS `beta_mobile`;
CREATE TABLE IF NOT EXISTS `beta_mobile` (
  `int` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `img` longtext NOT NULL,
  PRIMARY KEY (`int`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `echo_chakna`
--

DROP TABLE IF EXISTS `echo_chakna`;
CREATE TABLE IF NOT EXISTS `echo_chakna` (
  `int` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `img` longtext NOT NULL,
  PRIMARY KEY (`int`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `echo_jio`
--

DROP TABLE IF EXISTS `echo_jio`;
CREATE TABLE IF NOT EXISTS `echo_jio` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `img` longtext DEFAULT NULL,
  `name` varchar(25) NOT NULL,
  `display` varchar(12) DEFAULT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `echo_jio`
--

INSERT INTO `echo_jio` (`sno`, `img`, `name`, `display`) VALUES
(5, 'item.png', 'a', 'alpha');

-- --------------------------------------------------------

--
-- Table structure for table `echo_smart watch`
--

DROP TABLE IF EXISTS `echo_smart watch`;
CREATE TABLE IF NOT EXISTS `echo_smart watch` (
  `int` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `img` longtext NOT NULL,
  PRIMARY KEY (`int`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `echo_smart watch`
--

INSERT INTO `echo_smart watch` (`int`, `name`, `img`) VALUES
(1, 'samsung', 'dssffafsdvdsv');

-- --------------------------------------------------------

--
-- Table structure for table `echo_sub buffers`
--

DROP TABLE IF EXISTS `echo_sub buffers`;
CREATE TABLE IF NOT EXISTS `echo_sub buffers` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `img` longtext NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(40) NOT NULL,
  `username` varchar(30) NOT NULL,
  PRIMARY KEY (`sno`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`sno`, `category`, `username`) VALUES
(2, 'mobile', 'alpha'),
(1, 'laptop', 'alpha'),
(3, 'pc', 'alpha'),
(4, 'laptop', 'beta'),
(5, 'pc', 'beta'),
(6, 'headphone', 'beta'),
(7, 'mobile', 'charlie'),
(8, 'pc', 'charlie'),
(9, 'laptop', 'delta'),
(10, 'headphone', 'delta'),
(11, 'headphone', 'echo'),
(12, 'iphone', 'echo'),
(14, 'JBL', 'echo'),
(15, 'earphones', 'echo'),
(29, 'smart watch', 'echo'),
(30, 'mobile', 'beta'),
(31, 'chakna', 'echo'),
(34, 'sub buffers', 'echo'),
(37, 'jio', 'echo');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `sno` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `pass` varchar(30) NOT NULL,
  PRIMARY KEY (`sno`),
  UNIQUE KEY `UNIQUE` (`username`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`sno`, `username`, `fname`, `lname`, `pass`) VALUES
(2, 'beta', 'beta', 'beta', 'beta'),
(1, 'alpha', 'alpha', 'alpha', 'alpha'),
(3, 'charlie', 'charlie', 'charlie', 'charlie'),
(4, 'delta', 'delta', 'delta', 'delta'),
(5, 'echo', 'echo', 'echo', 'echo');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
