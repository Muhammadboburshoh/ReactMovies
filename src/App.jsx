import { Switch, Route} from "react-router-dom"

import { 
  HomePages,
  MoviesPages,
  PopularPages,
  SingleMoviePage,
  SeriesPages,
  TvShowsPages
} from "./pages"
import Appbar from "./containers/Appbar"

import "./assets/styles/main.scss"
function App() {
  return (
    <>
      <Appbar />

      <Switch>

      <Route exact path="/" component={HomePages} />
      <Route exact path="/popular" component={PopularPages} />
      <Route exact path="/series" component={SeriesPages} />
      <Route exact path="/tvShows" component={TvShowsPages} />
      <Route exact path="/movies" component={MoviesPages} />
      <Route exact path="/movie/:id" component={SingleMoviePage} />

      </Switch>
    </>
  )
}

export default App
