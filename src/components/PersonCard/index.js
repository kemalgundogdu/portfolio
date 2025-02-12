import React from "react";
// icons
import { FaInstagram, FaMedium } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
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
        <button className="px-3 py-2 bg-gray-800 text-gray-200 rounded-lg">
          Email
        </button>
        <button className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors">
          <FaMedium />
        </button>
        <button className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors">
          <FaGithub />
        </button>
        <button className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors">
          <FaInstagram />
        </button>
        <button className="px-2 py-2 text-xl bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-gray-200 transition-colors">
          <FaXTwitter />
        </button>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-200">
          Son Projelerim
        </h3>
        <div className="mt-3 p-4 bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">
            Kişisel Web Sitem
          </h4>
          <h5 className="text-xs text-gray-600 dark:text-gray-400">
            React, Redux, JavaScript, Tailwind CSS
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            React ve Tailwind CSS kullanarak geliştirdiğim kişisel web sitem.
            Projelerimi ve fotoğraflarımı paylaşıyorum.
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://github.com/kemalgundogdu/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-3 p-4 bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">
            Bil5 Quiz
          </h4>
          <h5 className="text-xs text-gray-600 dark:text-gray-400">
            React, Redux, JavaScript, Tailwind CSS, Framer
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Sade ve modern tasarıma sahip yapısıyla Bil5, genel kültür seviyesi
            ölçmeyi amaçlar. Her test 5 sorudan oluşur ve testin sonucunu
            paylaşmaya olanak sağlar.
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://github.com/kemalgundogdu/quizApp-bil5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://bil5quiz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
            >
              Demo
            </a>
          </div>
        </div>
      </div>

      <img src={banner} alt="banner" className="mt-10 rounded-2xl" />
    </div>
  );
}

export default PersonCard;
