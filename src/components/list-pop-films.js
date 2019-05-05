import React from 'react';
import SwapiService from "../services/swapi-service";

export default  class ListPopFilms extends  React.Component {
  swapiService = new SwapiService();

  state={
    filmList: null,
  }

  componentDidMount(){
    this.swapiService.getAllPopFilms()
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
        <li key={id} onClick={() => this.props.onFilmSelected(id)}>
          <img src={_imgUrl} alt="img" />
          <span>*{title} - {language} </span>
        </li>
      );
    });
  }


  render(){
    // console.log(this.state.filmList)
    const {filmList}=this.state;
    if(!filmList){return 'Loading... '}
    const items = this.renderItems(filmList)

    return (
        <div className="leftBlock">
          <ul className="ul-list">
            {items}
          </ul>
        </div>
    )
  }
}
