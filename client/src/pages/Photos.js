import React, { useEffect, useState } from "react";
// navbar
import Navbar from "../components/Navbar";

// unsplash api
import unsplashService from "../api/unsplash";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    document.title = "Fotoğraflar | Kemal Gündoğdu";
    unsplashService.fetchPhotos().then((resPhotos) => {
      setPhotos(resPhotos);
    });
  }, []);

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <div className="px-6 py-12 mt-16">
        <p className="text-gray-600 dark:text-gray-400 text-lg">
        Doğada vakit geçirmenin yanı sıra görmekten keyif aldığım manzaraları, mimari yapıları ve eşyaları fotoğraflamayı seviyorum. Fotoğraf çekmek benim için bir hobi ve aynı zamanda bir terapi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {photos.map((photo) => (
            <div key={photo.id}>
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="object-cover rounded-lg w-full h-[400px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
