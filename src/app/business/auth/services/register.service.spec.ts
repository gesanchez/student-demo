import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/**
 * Service
 */
import { RegisterService } from './register.service';


describe('Service: RegisterService', () => {
  let service: RegisterService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [RegisterService]
    });
    service = TestBed.get(RegisterService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it ('Deberia ser inyectado', () => {
    expect(service).toBeTruthy();
  });

  it ('Deberia llamar al servicio de registro', () => {
    service.register();
    const obj = {
      nombre: '',
      email: ''
    };
    const req = httpTestingController.expectOne('http://localhost:3000/registro');
    expect(req.request.body).toEqual(obj);
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
