import {Injectable}  from '@angular/core';
import {Http , Response , Headers , RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';



// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class loginService {

  results: Response;  
  constructor(private http :Http) {

  }



  findAll(data : Object) : Observable<Response>{
    let encode_clientKey = 'Basic ' + btoa("ApiConsumer" + ':' + "Base Token Here");
    
    let headers      = new Headers({'Authorization': encode_clientKey,
    'Content-Type': 'application/x-www-form-urlencoded'}); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    return this.http.post(this.api_base_url , data  , options)
            .map((res:Response) => 
                res )
  }


 
  private api_base_url = 'URL Here';

}


