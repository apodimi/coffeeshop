
import './App.css';
import  Navbar from '../src/components/navbar/MainNavbar.js'
import HomePageHeader from './components/HomePageHeader';
import { useState, useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=cafe%in%Athens&key=AIzaSyDZOB6FoiTv_3JOQvtLhc2L-QW7j4wy96g", {mode: "no-cors"})
      .then(res =>  {return res.json()})
      .then((result) => {
        setIsLoaded(true);
        setShops(result);
        console.log(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      })
  })

  return (
    <div className="App">
      <Navbar />
      <HomePageHeader />
      <div className="mt-12 rounded-lg grid grid-cols-2 gap-4 max-w-7xl mx-auto pl-8  sm:px-16">
        <h1 className="text-black text-left text-extrabold text-4xl font-bold my-12">Athens</h1>
        {shops.map(item => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{item.results}</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
