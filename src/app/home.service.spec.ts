import { getTestBed, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HomeService } from './home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('HomeService', () => {
  let service: HomeService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [HomeService]
    });
    injector = getTestBed();
    service = injector.get(HomeService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
   });
});
