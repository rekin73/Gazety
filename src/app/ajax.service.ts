import { HttpClient, HttpParams } from '@angular/common/http';
const params = new HttpParams()
.set('zmienna', 'wartosc');
this.httpClient.get('http://xxxxxx', {params})
.subscribe((data) => {
    console.log(data);
    },
error => {
console.log('Error', error);
});

export class Ajax {
    constructor(private httpClient: HttpClient) {}
}
