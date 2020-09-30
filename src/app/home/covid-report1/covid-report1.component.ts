import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable} from 'rxjs'


@Component({
  selector: 'app-covid-report1',
  templateUrl: './covid-report1.component.html',
  styleUrls: ['./covid-report1.component.css']
})
export class CovidReport1Component implements OnInit {
  panelOpenState = false;
  users: any;
  active:any;
  cases:any;
  deaths:any;
  recovered:any;
  countries :Object;
  constructor(private http:HttpClient) {

  }


  ngOnInit() {
    // let apiUrl="https://jsonplaceholder.typicode.com/users";
    let apiUrl="https://coronavirus-19-api.herokuapp.com/all"
    this.http.get(apiUrl).subscribe((data)=>{
      console.log(data);
      this.users=data;
      this.cases = this.users.cases;
      this.deaths = this.users.deaths;
      this.recovered= this.users.recovered;
      this.active= this.cases - (this.deaths + this.recovered);

      // if Array
      // this.active= this.users[0].cases - (this.users[0].deaths + this.users[0].recovered)


      this.http.get('https://coronavirus-19-api.herokuapp.com/countries').subscribe(
        data => this.countries = data





      )


    })
    



  }
   





// this.http.get('https://api.covid19india.org/state_district_wise.json').subscribe(data => {     // give a get request to url, data wiil be the response from url.
//   var dataAsArray = [];                   // new var to store data, a class variable can be used in your case.
//   for(const prop in data){                // prop will be the key, eg: 'Kerala', 'Ladakh'
//     let item = data[prop];                // get a single item from dict (in this case data of a single state as dict)
//     item["key"] = prop;                   // add the key(state name), if we need to know which state
//     dataAsArray.push(item);               // add data of a single state to an array
//   }
//   console.log("Data: ",dataAsArray);
// });








}
