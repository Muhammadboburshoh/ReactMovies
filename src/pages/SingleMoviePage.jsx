import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  imgsContiner: {
    maxWidth: "1100px",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "auto",
    marginLeft: "auto",
    flexWrap: "wrap",
  },
  imgStyle: {
    display: "flex",
    flexDirection: "column",
    width: "500px",
    marginRight: "auto",
    marginLeft: "auto",
    background: "red",
    textAlign: "center",
    padding: "30px"
  },
  movieImg: {
    filter: "blur(10px)",
  }
}); 

const SingleMoviePage = ({match}) => {

  const classes = useStyles();

  const [movieItem, setMovieItem] = useState({
    loading: false,
    data: [],
    error: null
  });

  const [movieImages, setMovieImages] = useState({
    loading: false,
    data: {},
    error: null
  });

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovieItem({
        loading: true,
        data: response.data
      })
    })
    .catch(function (error) {
      setMovieItem({
        error: error,
      })
    })
    .then(function () {
      // always executed
    }); 
  }, []);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/images`, {
      params: {
        api_key: '8d08d31e1b08de961a19e2ae293de867'
      }
    })
    .then(function (response) {
      setMovieImages({
        loading: true,
        data: {
          backdrops: response.data.backdrops,
          posters: response.data.posters,
        }
      })
    })
    .catch(function (error) {
      setMovieImages({
        error: error,
      })
    })
    .then(function () {
      // always executed
    }); 
  }, []);

  return (
    <>
      {
        movieItem.loading ? (
          <div>
            <Typography
              gutterBottom
              className={classes.imgStyle}
            >
              <img
                className={classes.movieImg}
                src={`https://image.tmdb.org/t/p/w500/${movieItem.data.poster_path}`}
                alt={movieItem.data.title}
              />
              <h1>{movieItem.data.title}</h1>
            </Typography>

            {
              movieImages.loading ? (
                <div className={classes.imgsContiner}>
                  {
                    movieImages.data.backdrops.map((item, index) => (
                      <img
                        className={classes.movieImg}
                        key={index}
                        src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                        alt={item.title}
                      />
                    ))
                  }

                  {
                    movieImages.data.posters.map((item, index) => (
                      <img
                        className={classes.movieImg}
                        key={index}
                        src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                        alt={item.title}
                      />
                    ))
                  }
                </div>
              ) : (
                <h1>Loading...</h1>
              )
            }
          </div>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </>
  )
}

export default SingleMoviePage;