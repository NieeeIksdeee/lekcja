-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 15, 2019 at 12:12 PM
-- Server version: 5.7.27-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `02_grzelak`
--

-- --------------------------------------------------------

--
-- Table structure for table `bibl_authors`
--

CREATE TABLE `bibl_authors` (
  `id_authors` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bibl_authors`
--

INSERT INTO `bibl_authors` (`id_authors`, `name`) VALUES
(1, 'J.R.R. Tolkien'),
(2, 'Henryk Sienkiewicz'),
(3, 'Adam Mickiewicz'),
(5, 'Boleslaw Prus');

-- --------------------------------------------------------

--
-- Table structure for table `bibl_books`
--

CREATE TABLE `bibl_books` (
  `id_books` int(11) NOT NULL,
  `id_authors` int(11) NOT NULL,
  `id_titles` int(11) NOT NULL,
  `ISBN` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bibl_books`
--

INSERT INTO `bibl_books` (`id_books`, `id_authors`, `id_titles`, `ISBN`) VALUES
(1, 1, 1, ''),
(2, 1, 2, ''),
(3, 2, 3, ''),
(4, 2, 4, ''),
(5, 2, 5, ''),
(6, 3, 6, ''),
(8, 5, 10, '');

-- --------------------------------------------------------

--
-- Table structure for table `bibl_checkouts`
--

CREATE TABLE `bibl_checkouts` (
  `id_checkouts` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_titles` int(11) NOT NULL,
  `date_in` date NOT NULL,
  `date_out` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bibl_checkouts`
--

INSERT INTO `bibl_checkouts` (`id_checkouts`, `id_users`, `id_titles`, `date_in`, `date_out`) VALUES
(3, 1, 1, '2019-10-29', '2019-11-09'),
(20, 1, 6, '2019-10-30', '2019-11-08'),
(21, 1, 10, '2019-11-06', '2019-11-28');

-- --------------------------------------------------------

--
-- Table structure for table `bibl_titles`
--

CREATE TABLE `bibl_titles` (
  `id_titles` int(11) NOT NULL,
  `title` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `bibl_titles`
--

INSERT INTO `bibl_titles` (`id_titles`, `title`) VALUES
(1, 'Hobbit'),
(2, 'Silmarillion'),
(3, 'Krzyzacy'),
(4, 'Ogniem i mieczem'),
(5, 'Quo vadis'),
(6, 'Dziady cz II'),
(7, 'Granica'),
(9, 'Przedwiosnie'),
(10, 'Lalka'),
(11, 'Granica');

-- --------------------------------------------------------

--
-- Table structure for table `bibl_users`
--

CREATE TABLE `bibl_users` (
  `id_users` int(11) NOT NULL,
  `login` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bibl_users`
--

INSERT INTO `bibl_users` (`id_users`, `login`, `password`) VALUES
(1, 'mateusz', 'grzelak');

-- --------------------------------------------------------

--
-- Table structure for table `garage`
--

CREATE TABLE `garage` (
  `id_car` int(11) NOT NULL,
  `nazwa` text NOT NULL,
  `cena` double NOT NULL,
  `foto` text NOT NULL,
  `opis` text NOT NULL,
  `szczegoly` text NOT NULL,
  `promocja` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `garage`
--

INSERT INTO `garage` (`id_car`, `nazwa`, `cena`, `foto`, `opis`, `szczegoly`, `promocja`) VALUES
(1, 'Seicento', 2137, 'https://cs1.gtavicecity.ru/screenshots/9a0d4/2019-05/original/618f980358f9549b91a58a1d227d55d9b723e847/724175-gta-sa-2019-05-19-18-17-19-35-result.jpg', 'Super fajnie pendzi, nie ma chyba szybszego LOL PZDR Z FARTEM BYKU', 'https://www.auto-data.net/en/fiat-seicento-187-0.9-39hp-7263', 30),
(2, 'Matiz', 1000, 'https://cs1.gtaall.com/screenshots/4dc09/2013-09/original/bd0fb9e76ae6f004c82b84ab0468d85c92aa6b78/43304-1349522708-gallery336.jpg', 'Maly ale wariat polecam fest dla malych biedakow z szybkimi okularami', 'https://www.auto-data.net/en/daewoo-matiz-i-0.8-i-52hp-16373', 10),
(3, 'Panda', 3500, 'https://cs3.gtaall.com/screenshots/4dc09/2016-03/original/334b3aab28844f29efce089f3ed9651e040b6ea0/327588-gta-sa-2016-03-23-12-37-35-70.jpg', 'Wolne, malo bezpieczne, nie polecamy tego kupowac wgl', 'https://www.auto-data.net/en/fiat-panda-ii-169-1.2-mpi-60hp-6903', 5),
(4, 'Corsa', 26456, 'https://cs2.gtaall.com/screenshots/4dc09/2013-09/original/7f05c40519bac57a564f03ed6be943ce9a507d65/120469-1284105197-opelcorsac-1.jpg', 'Maly, brzydki i niefajny', 'https://www.auto-data.net/en/opel-corsa-b-1.7-d-60hp-2121', 10);

-- --------------------------------------------------------

--
-- Table structure for table `klienci`
--

CREATE TABLE `klienci` (
  `id_klient` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL,
  `data_urodzenia` date NOT NULL,
  `kraj` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `klienci`
--

INSERT INTO `klienci` (`id_klient`, `imie`, `nazwisko`, `data_urodzenia`, `kraj`) VALUES
(1, 'Adam', 'Kowalski', '1990-11-14', 'Polska'),
(2, 'Tom', 'Hancock', '1987-10-15', 'Ameryka'),
(3, 'Sebastian', 'Szulc', '1999-12-02', 'Polska'),
(4, 'Agnieszka', 'Kowalska', '1983-03-26', 'Polska'),
(5, 'Marysia', 'Nowak', '2000-09-06', 'Polska'),
(6, 'Mitsuishi', 'Kotono', '1967-04-16', 'Japonia');

-- --------------------------------------------------------

--
-- Table structure for table `koszyk`
--

CREATE TABLE `koszyk` (
  `id_koszyk` int(11) NOT NULL,
  `id_zamowienie` int(11) NOT NULL,
  `id_produkt` int(11) NOT NULL,
  `ilosc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `koszyk`
--

INSERT INTO `koszyk` (`id_koszyk`, `id_zamowienie`, `id_produkt`, `ilosc`) VALUES
(1, 1, 6, 1),
(2, 1, 4, 2),
(3, 2, 5, 4),
(4, 2, 4, 5),
(5, 3, 2, 1),
(6, 4, 2, 2),
(7, 4, 4, 2),
(8, 5, 3, 1),
(9, 5, 4, 1),
(10, 5, 1, 1),
(11, 6, 6, 1),
(12, 6, 1, 1),
(13, 7, 2, 1),
(14, 7, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `organizacja`
--

CREATE TABLE `organizacja` (
  `id_org` int(11) NOT NULL,
  `nazwa_dzial` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organizacja`
--

INSERT INTO `organizacja` (`id_org`, `nazwa_dzial`) VALUES
(1, 'serwis'),
(2, 'handel'),
(3, 'marketing'),
(4, 'it');

-- --------------------------------------------------------

--
-- Table structure for table `pracownicy`
--

CREATE TABLE `pracownicy` (
  `id_pracownicy` int(11) NOT NULL,
  `imie` varchar(30) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `dzial` int(11) NOT NULL,
  `zarobki` int(11) NOT NULL,
  `data_urodzenia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pracownicy`
--

INSERT INTO `pracownicy` (`id_pracownicy`, `imie`, `dzial`, `zarobki`, `data_urodzenia`) VALUES
(4, 'jan', 2, 25, '1975-01-28'),
(5, 'ania', 2, 35, '1987-04-13'),
(6, 'adam', 3, 45, '1997-11-14'),
(7, 'marcin', 4, 15, '2001-09-01'),
(8, 'michał', 3, 45, '1999-10-22'),
(9, 'patrycja', 1, 33, '2002-03-16'),
(10, 'robert', 1, 51, '1992-09-14'),
(11, 'basia', 3, 15, '1987-04-25'),
(12, 'dagmara', 2, 20, '1998-04-08'),
(13, 'andrzej', 2, 30, '1987-04-15'),
(14, 'jarek', 1, 10, '1987-02-05'),
(15, 'dorota', 3, 35, '1999-04-17'),
(16, 'zosia', 4, 21, '1988-02-21'),
(17, 'dawid', 4, 45, '1985-01-15'),
(18, 'klaudia', 4, 65, '1984-12-12'),
(19, 'franek', 1, 60, '1999-01-15');

-- --------------------------------------------------------

--
-- Table structure for table `produkty`
--

CREATE TABLE `produkty` (
  `id_produkt` int(11) NOT NULL,
  `nazwa` text NOT NULL,
  `koszt` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produkty`
--

INSERT INTO `produkty` (`id_produkt`, `nazwa`, `koszt`) VALUES
(1, 'Buty sportowe', 66.98),
(2, 'spodnie', 39.97),
(3, 'bluza adidas', 87.98),
(4, 'bluzka czarna', 19.98),
(5, 'buty na obcasach', 88.77),
(6, 'buty skorzane', 46.99);

-- --------------------------------------------------------

--
-- Table structure for table `zamowienia`
--

CREATE TABLE `zamowienia` (
  `id_zamowienie` int(11) NOT NULL,
  `data` date NOT NULL,
  `id_klient` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zamowienia`
--

INSERT INTO `zamowienia` (`id_zamowienie`, `data`, `id_klient`) VALUES
(1, '2018-11-08', 1),
(2, '2018-11-08', 4),
(3, '2018-11-11', 2),
(4, '2018-11-12', 3),
(5, '2018-11-13', 6),
(6, '2018-11-14', 5),
(7, '2018-11-15', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bibl_authors`
--
ALTER TABLE `bibl_authors`
  ADD PRIMARY KEY (`id_authors`);

--
-- Indexes for table `bibl_books`
--
ALTER TABLE `bibl_books`
  ADD PRIMARY KEY (`id_books`);

--
-- Indexes for table `bibl_checkouts`
--
ALTER TABLE `bibl_checkouts`
  ADD PRIMARY KEY (`id_checkouts`);

--
-- Indexes for table `bibl_titles`
--
ALTER TABLE `bibl_titles`
  ADD PRIMARY KEY (`id_titles`);

--
-- Indexes for table `bibl_users`
--
ALTER TABLE `bibl_users`
  ADD PRIMARY KEY (`id_users`);

--
-- Indexes for table `garage`
--
ALTER TABLE `garage`
  ADD PRIMARY KEY (`id_car`);

--
-- Indexes for table `klienci`
--
ALTER TABLE `klienci`
  ADD PRIMARY KEY (`id_klient`);

--
-- Indexes for table `koszyk`
--
ALTER TABLE `koszyk`
  ADD PRIMARY KEY (`id_koszyk`);

--
-- Indexes for table `organizacja`
--
ALTER TABLE `organizacja`
  ADD PRIMARY KEY (`id_org`);

--
-- Indexes for table `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD PRIMARY KEY (`id_pracownicy`);

--
-- Indexes for table `produkty`
--
ALTER TABLE `produkty`
  ADD PRIMARY KEY (`id_produkt`);

--
-- Indexes for table `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD PRIMARY KEY (`id_zamowienie`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bibl_authors`
--
ALTER TABLE `bibl_authors`
  MODIFY `id_authors` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `bibl_books`
--
ALTER TABLE `bibl_books`
  MODIFY `id_books` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `bibl_checkouts`
--
ALTER TABLE `bibl_checkouts`
  MODIFY `id_checkouts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `bibl_titles`
--
ALTER TABLE `bibl_titles`
  MODIFY `id_titles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `bibl_users`
--
ALTER TABLE `bibl_users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `garage`
--
ALTER TABLE `garage`
  MODIFY `id_car` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `klienci`
--
ALTER TABLE `klienci`
  MODIFY `id_klient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `koszyk`
--
ALTER TABLE `koszyk`
  MODIFY `id_koszyk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `organizacja`
--
ALTER TABLE `organizacja`
  MODIFY `id_org` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pracownicy`
--
ALTER TABLE `pracownicy`
  MODIFY `id_pracownicy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `produkty`
--
ALTER TABLE `produkty`
  MODIFY `id_produkt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `id_zamowienie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
