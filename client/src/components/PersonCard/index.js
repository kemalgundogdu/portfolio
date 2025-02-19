import React from "react";
// icons
import { FaInstagram, FaMedium } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
// router
import { Link } from "react-router-dom";
// banner
import banner from "../../images/2.jpeg";

function PersonCard() {
  return (
    <div className="px-6 py-12 mt-16">
      <h1 className="text-2xl font-medium text-gray-600 dark:text-gray-200">
        Kemal Gündoğdu
      </h1>
      <h2 className="text-base text-gray-500 dark:text-gray-300">
        Full Stack Developer
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-md mt-5">
        Aklıma gelen her fikri hayata geçirmek için kodlama ile tasarım
        arasındaki dengeyi ustaca sağlamak benim en büyük yeteneklerimden biri.
        Projelerimi optimize ederken, hem performansı hem de estetiği göz önünde
        bulundurarak çalışırım.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-md mt-5">
        İş dışında zamanımı motorsiklet sürmeye, doğanın içinde vakit geçirmeye
        ve cross yapmaya ayırıyorum.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-md mt-5">
        Bu konularda soruların varsa veya kendi ürünün hakkında konuşmak
        istersen mail adresim üzerinden bana ulaşabilirsin.
      </p>
      <div className="mt-5 flex gap-3">
        <Link
          to="mailto:gundogdudev@gmail.com"
          className="px-3 py-2 bg-gray-800 text-gray-200 rounded-lg"
        >
          Email
        </Link>
        <Link
          to="https://medium.com/@kegundogdu"
          target="_blank"
          className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors"
        >
          <FaMedium />
        </Link>
        <Link
          to="https://github.com/kemalgundogdu"
          target="_blank"
          className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.instagram.com/kegundogdu/"
          target="_blank"
          className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://x.com/kegundogdu"
          target="_blank"
          className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors"
        >
          <FaXTwitter />
        </Link>
      </div>

      <img src={banner} alt="banner" className="mt-10 rounded-2xl" />
    </div>
  );
}

export default PersonCard;
