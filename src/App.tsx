import React, { useEffect } from "react";
import Header from "./page/components/header/header";
import MainTopSection from "./page/components/mainTopSection/mainTopSection";
import MainTitleSection from "./page/components/mainTitleSection/mainTitleSection";
import { useCastomDispatch } from "./hooks/store";
import { fetchCard } from "./store/thunks/fetchCard";
import Cards from "./page/components/cards/cards";
import OrderSection from "./page/components/orderSection/orderSection";
import Galery from "./page/components/galery/galery";
import { fetchImages } from "./store/thunks/fetchImages";
import { fetchReviews } from "./store/thunks/fetchReviews";
import Reviews from "./page/components/reviews/reviews";
import ConnectionSection from "./page/components/connection/connectionSection";
import img from "./image/Rectangle 250.jpg";
import Footer from "./page/components/footer/footer";

function App() {
  const dispatch = useCastomDispatch();
  useEffect(() => {
    dispatch(fetchCard("/posts"));
    dispatch(fetchImages("/photos"));
    dispatch(fetchReviews("/comments"));
  });

  return (
    <div className="container">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <MainTopSection />
        <MainTitleSection />
        <Cards />
        <OrderSection />
        <Galery />
        <Reviews />
        <ConnectionSection />
      </main>
      <div className="mapSection">
        <img src={img} alt="Карта" className="map" />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
