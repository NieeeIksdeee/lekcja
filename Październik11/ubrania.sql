-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Czas generowania: 23 Lis 2018, 12:49
-- Wersja serwera: 5.7.23-0ubuntu0.16.04.1
-- Wersja PHP: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `ubrania`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klienci`
--

CREATE TABLE `klienci` (
  `id_klient` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL,
  `data_urodzenia` date NOT NULL,
  `kraj` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `klienci`
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
-- Struktura tabeli dla tabeli `koszyk`
--

CREATE TABLE `koszyk` (
  `id_koszyk` int(11) NOT NULL,
  `id_zamowienie` int(11) NOT NULL,
  `id_produkt` int(11) NOT NULL,
  `ilosc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `koszyk`
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
-- Struktura tabeli dla tabeli `produkty`
--

CREATE TABLE `produkty` (
  `id_produkt` int(11) NOT NULL,
  `nazwa` text NOT NULL,
  `koszt` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `produkty`
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
-- Struktura tabeli dla tabeli `zamowienia`
--

CREATE TABLE `zamowienia` (
  `id_zamowienie` int(11) NOT NULL,
  `data` date NOT NULL,
  `id_klient` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `zamowienia`
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
-- Indeksy dla zrzutów tabel
--

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
-- AUTO_INCREMENT dla tabeli `klienci`
--
ALTER TABLE `klienci`
  MODIFY `id_klient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT dla tabeli `koszyk`
--
ALTER TABLE `koszyk`
  MODIFY `id_koszyk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT dla tabeli `produkty`
--
ALTER TABLE `produkty`
  MODIFY `id_produkt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `id_zamowienie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
