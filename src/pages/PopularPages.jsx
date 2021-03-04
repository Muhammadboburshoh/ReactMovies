import axios from 'axios';
import { useState, useEffect } from "react"
import Grid from '@material-ui/core/Grid';
import MovieCard from "../components/MovieCard/MovieCard"

function PopularPages () {

  const [ movies, setMovies ] = useState({
    loding: true,
    data: [],
    error: null,
  })

  useEffect(() => {

    axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovies({
        loading: false,
        data: response.data.results
      })
    })
    .catch(function (error) {
      setMovies({
        error: error
      })
      console.log("xato", error);
    })
    .then(function () {
      // always executed
    })

  }, [])

  console.log(movies.data);
  return (
    <div>
      {
        !movies.loading && (
          <Grid 
            container
            direction="row"
            justify="center"
          >
            {
              movies.data.map ((item, i) => (

                <Grid  item xs={6} sm={3} key={i}>
                  <MovieCard 
                    id={item.id}
                    description={item.overview}
                    title={item.title}
                    img={item.poster_path}
                  />
                </Grid>
              ))
            }
          </Grid>
        )
      }
    </div>
  )
}

export default PopularPages