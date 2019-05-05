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


  // async getFilm(id=0){
  //   const film = await this.getResourse(`&page=1`)
  //   console.log(film.results[id])
  //   return this._transformFilm(film.results[id])
  // }

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

// const swapi = new SwapiService();
// swapi.getAllFilms().then((body)=>{
//   console.log(body)
// })
// swapi.getFilm(2).then((body)=>{
//   console.log(body)
// })





















































// const getResourse = async (url) =>{
//   const res = await fetch(url);
//   if(!res.ok){
//     throw new Error(`Could not fetch ${url} + received ${res.status}`)
//   }
//   return await res.json();;
// }


// getResourse('https://api.themoviedb.org/3/movie/popular?api_key=6c9632b0adb4a4ce0ca5452b8dd00356&language=en-US&page=1')
// .then((body)=>{
//   console.log(body.results[2])
// }).catch((err)=>{
//   console.error('Can\'t get data', err)
// })


// fetch('https://api.themoviedb.org/3/movie/popular?api_key=6c9632b0adb4a4ce0ca5452b8dd00356&language=en-US&page=1')
// .then((res)=>{
//   return res.json();
//   // console.log('Got Response', res.json());
// }).then((body)=>{
//   console.log(body)
// })
