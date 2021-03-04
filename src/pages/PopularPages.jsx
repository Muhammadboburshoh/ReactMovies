import axios from 'axios';
import { useState, useEffect } from "react"

function PopularPages () {

  const [ movies, setMovies ] = useState({
    loding: true,
    data: [],
    error: null,
  })

  useEffect(() => {

    axios.get('https://api.themovieb.org/3/movie/popular?page=1', {
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

  return (
    <header>
      {
        !movies.loading && movies.data.map((item, i) => {
          return (
            <h3 key={i}>{item.title}</h3>
          )
        })
      }
    </header>
  )
}

export default PopularPages