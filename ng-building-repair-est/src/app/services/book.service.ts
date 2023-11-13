import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http :HttpClient) { }

  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private header2 = new HttpHeaders({'Content-Type':'multipart/form-data','Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'})

addBook(book:Book) :Observable<Book>{
    return this.http.post<Book>('http://localhost:8080/BasicLibrary/addBook.do', book, {headers: this.headers});
}
updateBook(book:Book) :Observable<Book>{
  return this.http.post<Book>('http://localhost:8080/BasicLibrary/updateBook.do', book, {headers: this.headers});
}
deleteBook(book:Book) :Observable<Book>{
  return this.http.post<Book>('http://localhost:8080/BasicLibrary/deleteBook.do', book, {headers: this.headers});
}

get_file_url(filename:string): Observable<string> {
  return this.http.get<string>('https://uc6f231u41.execute-api.us-east-1.amazonaws.com/default/testing?filename='+filename);
}

postFile(fileToUpload: File, endpoint:string): Observable<any> {
  // const endpoint = "https://s3.amazonaws.com/practicebucketjack/UI_files/nothing.txt?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVAIQVUNRBBZJ6JDM%2F20210328%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210328T164327Z&X-Amz-Expires=36000&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLWVhc3QtMSJGMEQCICeUi%2BDae93hkzSoMQhJz8z4Vrcmy6s5p82uXXKrgafgAiA5YTbFdAmwt1jH%2BwcH6z9yqYPvdTA92zG%2BODNi8isj8SrRAQhKEAAaDDM0NDE2OTIyNzEwNiIMag9U1YYarR3xcvIMKq4BrDaFRsF98%2BIzezQ7u1aST6ussv5%2Bmw86iN%2FvL6T%2BGGlPGHgBv29KaCND0kEA%2FCOQLQKrD7h8sMXy3%2BxbyqAIGE%2FZaMH4rH2X5h3pcceOj0dtV2poFgUf5L7oKuyzLje8b4aa0wc4%2FZyq0ROUv0XnWLI4hn70hJyxowQRpeqVhF9SNPfILWjXctFE8MvnmIC%2BzM13NJknk9KKHuXPuJOIoNWJcxLcxD6HJkRrsBT6MK3kgoMGOuEBDm5SHJZ1oLsSlZHoPg1wqrQRLpOnR515Kgbc%2F8R3HPIvHMg1T862g4iKR3tgZjSnHKIQK7ombBRC%2FIP4vdXbcZLVrSWrzRL1Kza0tSDiyaw2IX%2Bh%2F%2BvlrOhVF2WStgS7HpCleaPWOGsxihqbZh2kWb0OW%2BK4NgxS5HY4pTcqMQO885ksN04QMX33pertAEnJHVubOGBP4hA2OCsvgRuGUM88vc9UdRW977l6yeZUAoktjvdU2AFmFG81Nu0zivqL8IwhWqrbLWFbxYI05JXCH36BDxjsnodgIZSBwjc1IJAq&X-Amz-Signature=30a9baf88c4ebe4620d50545e0c522999638663b62c4d6ccb1985552e561cdee"
  const formData: FormData = new FormData();
  formData.append('fileKey', fileToUpload, fileToUpload.name);
  return this.http.put(endpoint, formData, { headers: this.header2 });
}

}
