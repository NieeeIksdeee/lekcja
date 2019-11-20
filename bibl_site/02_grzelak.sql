-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 20 Lis 2019, 22:51
-- Wersja serwera: 10.4.6-MariaDB
-- Wersja PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `02_grzelak`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bibl_authors`
--

CREATE TABLE `bibl_authors` (
  `id_authors` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `bibl_authors`
--

INSERT INTO `bibl_authors` (`id_authors`, `name`) VALUES
(1, 'J.R.R. Tolkien'),
(2, 'Henryk Sienkiewicz'),
(3, 'Adam Mickiewicz'),
(5, 'Boleslaw Prus');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bibl_books`
--

CREATE TABLE `bibl_books` (
  `id_books` int(11) NOT NULL,
  `id_authors` int(11) NOT NULL,
  `id_titles` int(11) NOT NULL,
  `Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `bibl_books`
--

INSERT INTO `bibl_books` (`id_books`, `id_authors`, `id_titles`, `Status`) VALUES
(12, 3, 32, 1),
(13, 2, 33, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bibl_checkouts`
--

CREATE TABLE `bibl_checkouts` (
  `id_checkouts` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_books` int(11) NOT NULL,
  `date_in` date NOT NULL,
  `date_out` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `bibl_checkouts`
--

INSERT INTO `bibl_checkouts` (`id_checkouts`, `id_users`, `id_books`, `date_in`, `date_out`) VALUES
(3, 1, 1, '2019-10-29', '2019-11-09'),
(20, 1, 6, '2019-10-30', '2019-11-08'),
(21, 1, 10, '2019-11-06', '2019-11-28'),
(22, 2, 6, '2019-11-20', '2019-11-22'),
(23, 1, 7, '2019-11-20', '2019-11-21'),
(24, 1, 1, '2019-11-20', '2019-11-21'),
(25, 2, 32, '2019-11-20', '2019-11-23');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bibl_titles`
--

CREATE TABLE `bibl_titles` (
  `id_titles` int(11) NOT NULL,
  `title` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `bibl_titles`
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
(11, 'Granica'),
(32, 'Dziady cz IV'),
(33, 'KrzyÅ¼acy');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `bibl_users`
--

CREATE TABLE `bibl_users` (
  `id_users` int(11) NOT NULL,
  `login` text COLLATE utf8mb4_polish_ci NOT NULL,
  `password` text COLLATE utf8mb4_polish_ci NOT NULL,
  `perm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `bibl_users`
--

INSERT INTO `bibl_users` (`id_users`, `login`, `password`, `perm`) VALUES
(1, 'mateusz', 'grzelak', 1),
(2, 'dawid', 'belica', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `bibl_authors`
--
ALTER TABLE `bibl_authors`
  ADD PRIMARY KEY (`id_authors`);

--
-- Indeksy dla tabeli `bibl_books`
--
ALTER TABLE `bibl_books`
  ADD PRIMARY KEY (`id_books`),
  ADD KEY `id_authors` (`id_authors`,`id_titles`),
  ADD KEY `Titles` (`id_titles`);

--
-- Indeksy dla tabeli `bibl_checkouts`
--
ALTER TABLE `bibl_checkouts`
  ADD PRIMARY KEY (`id_checkouts`),
  ADD KEY `id_users` (`id_users`,`id_books`),
  ADD KEY `id_titles` (`id_books`);

--
-- Indeksy dla tabeli `bibl_titles`
--
ALTER TABLE `bibl_titles`
  ADD PRIMARY KEY (`id_titles`);

--
-- Indeksy dla tabeli `bibl_users`
--
ALTER TABLE `bibl_users`
  ADD PRIMARY KEY (`id_users`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `bibl_authors`
--
ALTER TABLE `bibl_authors`
  MODIFY `id_authors` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `bibl_books`
--
ALTER TABLE `bibl_books`
  MODIFY `id_books` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `bibl_checkouts`
--
ALTER TABLE `bibl_checkouts`
  MODIFY `id_checkouts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT dla tabeli `bibl_titles`
--
ALTER TABLE `bibl_titles`
  MODIFY `id_titles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT dla tabeli `bibl_users`
--
ALTER TABLE `bibl_users`
  MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `bibl_books`
--
ALTER TABLE `bibl_books`
  ADD CONSTRAINT `Authors` FOREIGN KEY (`id_authors`) REFERENCES `bibl_authors` (`id_authors`),
  ADD CONSTRAINT `Titles` FOREIGN KEY (`id_titles`) REFERENCES `bibl_titles` (`id_titles`);

--
-- Ograniczenia dla tabeli `bibl_checkouts`
--
ALTER TABLE `bibl_checkouts`
  ADD CONSTRAINT `bibl_checkouts_ibfk_2` FOREIGN KEY (`id_users`) REFERENCES `bibl_users` (`id_users`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
