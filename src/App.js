
import './App.css';
import  Navbar from '../src/components/navbar/MainNavbar.js'
import HomePageHeader from './components/HomePageHeader';
import { useState, useEffect, useLayoutEffect } from 'react';


const apiUrl = "maps/api/place/textsearch/json?query=cafe%in%Athens&key=AIzaSyDZOB6FoiTv_3JOQvtLhc2L-QW7j4wy96g";


function App() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useLayoutEffect(() => {

    
    fetch("maps/api/place/textsearch/json?query=cafe%in%Athens&key=AIzaSyDZOB6FoiTv_3JOQvtLhc2L-QW7j4wy96g")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
          console.log("ok");
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      )
  }, [])

  console.log(items)

  



  if (!isLoaded) {
    return ;
  } else {
    return (
      <div className="App">
        <Navbar />
        <HomePageHeader />
        <div className="mt-12 rounded-lg grid  gap-4 max-w-7xl mx-auto pl-8  sm:px-16">
          <h1 className="text-black text-left text-extrabold text-4xl font-bold mt-12 mb-0">Athens</h1>

          <div className="flex my-8">


            <div class="max-w-sm rounded overflow-hidden shadow-lg text-left mr-4	">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{items.results[0].name}</div>
                <p class="text-gray-700 text-base">{items.results[0].formatted_address}</p>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg text-left mr-4	">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{items.results[1].name}</div>
                <p class="text-gray-700 text-base">{items.results[1].formatted_address}</p>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg text-left	mr-4">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{items.results[2].name}</div>
                <p class="text-gray-700 text-base">{items.results[2].formatted_address}</p>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg text-left	mr-4">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{items.results[3].name}</div>
                <p class="text-gray-700 text-base">{items.results[3].formatted_address}</p>
              </div>
            </div>


          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
