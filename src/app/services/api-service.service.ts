import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private darkModeKey = 'dark-mode';
  private loggedInKey = 'loggedIn'

  baseUrl:string = "http://localhost:3000/livescore"
  playerUrl:string = "http://localhost:3000/players"
  pointTableUrl:string = "http://localhost:3000/pointTable"
  matchesUrl:string = "http://localhost:3000/matches"
  t20Url:string = "http://localhost:3000/T20"
  testUrl:string = "http://localhost:3000/TEST"
  odiUrl:string = "http://localhost:3000/ODI"

  constructor(private http : HttpClient) { }


// GET - get match data 

getMatchScore(){
  return this.http.get(this.baseUrl)
}
// GEt - get a player all data 

getPlayerData(){
 return this.http.get(this.playerUrl)
}

getPointTable(){
  return this.http.get(this.pointTableUrl)
}

matches(){
  return this.http.get(this.matchesUrl)
}

// POST - post a data in players api
addPlayerData(players:any){
  return this.http.post(this.playerUrl,players);
}

// UPDATE - Update a players data

updatePlayer(id:string){
  return this.http.get(`${this.playerUrl}/${id}`);
}

updatePlayerData(playerData:any){
  return this.http.put(`${this.playerUrl}/${playerData.id}`,playerData)
}

// DELETE - Delete Player recodes

deletePlayers(id:string){
  return this.http.delete(`${this.playerUrl}/${id}`)
}

// GET - get T20 data

t20Data(){
 return this.http.get(this.t20Url)
}

// GET - get test data

testData(){
  return this.http.get(this.testUrl)
}

//GET  - get a ODI data

odiData(){
  return this.http.get(this.odiUrl)
}




login(){
  sessionStorage.setItem(this.loggedInKey,'true')
}

logout(){
  sessionStorage.removeItem(this.loggedInKey)
}

isLoggedIn():boolean{
  return sessionStorage.getItem(this.loggedInKey) === 'true'
}






// Dark And Light Mode 










}
