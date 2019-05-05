import React from 'react';
// import ReactDOM from 'react-dom';
import SwapiService from "../services/swapi-service";

export default  class ListSimFilms extends  React.Component {
  swapiService = new SwapiService();

  state={
    filmList: null,
  }

  componentDidMount(){
    this.updateListOfSimFilms()
  }

  componentDidUpdate(prevProps){
    // console.log(this.props.filmId)
    if(this.props.filmId!==prevProps.filmId){
      this.updateListOfSimFilms(this.props.filmId);
    }
  }

  updateListOfSimFilms=(id)=>{
    // console.log('ID:', id)
    if (id==null) return
    this.swapiService.getAllSimFilms(id)
    .then((filmList)=>{
      this.setState({
        filmList
      })
    });
  }


  renderItems(arr) {
    // console.log(arr)
    return arr.map(({id, title, poster, language}) => {
      const _imgUrl=`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`;
      return (
        <li key={id}>
          <img src={_imgUrl} alt="img" />
          <span>*{title} - {language} </span>
        </li>
      );
    });
  }


  render(){
    // console.log(this.state.filmList)
    const {filmList}=this.state;
    if(!filmList){return null}
    const items = this.renderItems(filmList)

    return (
        <div className="simFilms">
          <h3>Similar films: </h3>
          <ul className="ul-list">
            {items}
          </ul>
        </div>
    )
  }
}
