import React, { useEffect } from 'react'

import Navbar from '../components/Navbar';
import PersonCard from '../components/PersonCard';

function Home() {

  useEffect(() => {
    document.title = 'Kemal Gündoğdu'
  });

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <PersonCard />
    </div>
  )
}

export default Home