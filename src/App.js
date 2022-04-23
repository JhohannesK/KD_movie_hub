import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Row from "./components/Rows";
import requests from "./components/Requests";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
      <Row title="Popular Now" fetchUrl={requests.getPopular} />
      <Row title="Top Rated" fetchUrl={requests.getTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="Mystery" fetchUrl={requests.fetchMystery} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchSciFi} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="War" fetchUrl={requests.fetchWar} />
      <Row title="Thriller" fetchUrl={requests.fetchThriller} />
      <Row title="Adventure" fetchUrl={requests.fetchAdventure} />

    </div>
  );
}

export default App;
