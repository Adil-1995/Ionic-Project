
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  disabledNext:boolean=false;
  disabledBack:boolean=true;
  count:number=0;
  day: Array<String>= ["1", "2", "3", "4","5","6", "7", "8", "9","10", "11", "12", "13", "14","15","16", "17", "18"];
   firstTeam: Array<String>= ["Team A", "Team B", "Team C", "Team D","Team E"];
   secondTeam: Array<String> = ["Team F", "Team G", "Team H", "Team I","Team J"];
   auxiliar1:Array<String>=[];
   auxiliar2:Array<String>=[];
   goals: Array<String>= ["0", "1", "2", "3", "4", "5"];
   scoredGoals:String;
   constructor() {
  }
  generateGoals(){
    this.scoredGoals= this.goals[Math.floor(Math.random()*this.goals.length)];;
  }
  siguiente(){
    this.auxiliar1=this.auxiliar1.concat(this.secondTeam.slice(1),this.firstTeam.slice(4))
    this.auxiliar2=this.auxiliar2.concat(this.firstTeam.slice(0,1),this.secondTeam.slice(0,1),this.firstTeam.slice(1))
    this.auxiliar2.pop()
    this.firstTeam=this.auxiliar2;
    this.secondTeam=this.auxiliar1;
    this.auxiliar1=[];
    this.auxiliar2=[];
    this.incrementador();
  }
  anterior(){
   this.auxiliar1=this.auxiliar1.concat(this.firstTeam.slice(1,2),this.secondTeam.slice(0));
    this.auxiliar1.pop();
    this.auxiliar2=this.auxiliar2.concat(this.firstTeam.slice(0,1),this.firstTeam.slice(2), this.secondTeam.slice(4));
    this.firstTeam=this.auxiliar2;
    this.secondTeam=this.auxiliar1;
    this.auxiliar1=[];
    this.auxiliar2=[];
    this.decrementador();
  }
  incrementador(){
    this.count++;
    if(this.count==18){
      this.disabledNext=true;
    }
    if(this.count>=0){
      this.disabledBack=false;
    }
    }
    decrementador(){
      this.count--;
      if(this.count==0){
        this.disabledBack=true;
    }
    if(this.count>=0){
      this.disabledNext=false;
  }

  }

}
export class Match{
 
  private result: Map<String, number> = new Map<String, number>();
  private goal:[]= [];
  private time =90;

	constructor() {
	}
  startMatch(){
    let scoreNumber:String;
  let firstScore =3,secondScore =12;
  for(let i = 0;i<this.time;i++){
    let gol = Math.floor(Math.random()*(20-0)+0);
    if(gol ==firstScore||gol==secondScore){
      gol=1;
      let teamScore = (Math.random()*(1-(2+1))+(2));
      if(teamScore==1){
     //   this.result.set()
        console.log("goool");
        
      }else{
        console.log("noooooooooooo");
        
      }
    }
  }

}
}

//
// class partido{
//   private _equipoLocal: String;
//   private _equipoVisitante: String;
//   private _golesLocal: String;
//   private _golesVisitante: String;
//   private _minutos: number;

//   constructor(local:String, visitante:String, golesLocal:String, golesVisitante:String, min:number){
//       this._equipoLocal=local;
//       this._equipoVisitante=visitante;
//       this._golesLocal=golesLocal;
//       this._golesVisitante=golesVisitante;
//       this._minutos=min;
//   }
// public get equipoLocal(): String {
//   return this._equipoLocal;
// }
// public set equipoLocal(value: String) {
//   this._equipoLocal = value;
// }
  
// public get equipoVisitante(): String {
//   return this._equipoVisitante;
// }
// public set equipoVisitante(value: String) {
//   this._equipoVisitante = value;
// }
  
// public get golesLocal(): String {
//   return this._golesLocal;
// }
// public set golesLocal(value: String) {
//   this._golesLocal = value;
// }

// public get golesVisitante(): String {
//   return this._golesVisitante;
// }
// public set golesVisitante(value: String) {
//   this._golesVisitante = value;
// }

// public get minutos(): number {
//   return this._minutos;
// }
// public set minutos(value: number) {
//   this._minutos = value;
// }
//}