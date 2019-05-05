export default class SwapiService{
  _apiBase = 'https://api.themoviedb.org/3/movie/popular?api_key=6c9632b0adb4a4ce0ca5452b8dd00356&language=en-US'

  async getResourse(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok){
      throw new Error(`Could not fetch ${url} + received ${res.status}`)
    }
    return await res.json();;
  }

  async getAllPopFilms(){
    const films = await this.getResourse(`&page=1`)
    // console.log('AllPopFilms', films.results.map(this._transformFilm))
    return films.results.map(this._transformFilm)
  }


///////*****************************///////////////////////////

  async getSimResourse(simFilmId){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${simFilmId}/similar?api_key=6c9632b0adb4a4ce0ca5452b8dd00356&language=en-US&page=1`);
    return await res.json();;
  }

  async getAllSimFilms(simFilmId){
    const films = await this.getSimResourse(simFilmId)
    // console.log('AllSimFilms', films.results.map(this._transformFilm))
    return films.results.map(this._transformFilm)
  }
///////*****************************///////////////////////////


  getFilm= async(id)=>{
    const film = await this.getResourse(`&page=1`)
    return film.results.filter((item)=>{
      if(item.id===id){
        return this._transformFilm(item)
      }
      return null;
    })
  }


  _transformFilm=(film)=>{
    return {
      id: film.id,
      title: film.title,
      poster: film.poster_path,
      language: film.original_language,
    }
  }
}


















































