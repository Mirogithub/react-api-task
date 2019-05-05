import React from 'react';
import SwapiService from "../services/swapi-service";

export default class DetailedInfo extends  React.Component {
  swapiService = new SwapiService();
  state={
    selectedFilm: null
  }

  componentDidMount(){
    this.updateFilm()
  }

  componentDidUpdate(prevProps){ 
    if(this.props.filmId!==prevProps.filmId){
      this.updateFilm();
    }
  }

  updateFilm=()=>{
    const {filmId} = this.props
    if (!filmId){ return }
    // console.log(this.swapiService.getFilm(filmId))
    this.swapiService.getFilm(filmId).then((selectedFilm)=>{
      // console.log('DetailedInfo', selectedFilm[0])
      this.setState({
        selectedFilm: {
          id: selectedFilm[0].id,
          title: selectedFilm[0].title,
          poster: selectedFilm[0].poster_path,
          language: selectedFilm[0].original_language,
        }
      })
    })
  }



  render() {

    if(!this.state.selectedFilm) {
      return <div className="rightBlock">
              <p>Please select the film</p>
              </div>
    }

    const {selectedFilm}= this.state
    const _imgUrl=`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${selectedFilm.poster}`
    return (
      <div className="rightBlock">
        <h3>Information about the film: {this.props.filmId}</h3>
        <p>Title: {selectedFilm.title}</p>
        <p>Language: {selectedFilm.language}</p>
        <img src={_imgUrl} alt="img" />
      </div>
    );
  }
}
