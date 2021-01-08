import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row
        title="MOVIES ORIGINAL"
        fetchUrl={requests.fetchOriginals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
