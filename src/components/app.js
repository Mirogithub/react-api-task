import React from 'react';
// import ReactDOM from 'react-dom';
// import SwapiService from "../services/swapi-service";
import ListPopFilms from './list-pop-films';
import ListSimFilms from './list-sim-films';
import Header from './header';
import DetailedInfo from './detailedInfo.js';



export default class App extends  React.Component {
  state={
    selectedFilmId: null,
  }

  onFilmSelected=(id)=>{
    // console.log(id)
    this.setState({
      selectedFilmId: id,
    })
  }
  render() {
    return (
      <div className="contentBlock">
        <Header />
        <ListPopFilms onFilmSelected={this.onFilmSelected} />
        <DetailedInfo filmId={this.state.selectedFilmId} />
        <ListSimFilms onFilmSelected={this.onFilmSelected} filmId={this.state.selectedFilmId}/>
      </div>
    );
  }
}
