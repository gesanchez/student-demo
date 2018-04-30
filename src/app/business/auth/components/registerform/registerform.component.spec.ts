import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterService } from '../../services/register.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
/**
 * Components
 */
import { RegisterformComponent } from './registerform.component';

describe('Component: RegisterformComponent', () => {
  let component: RegisterformComponent;
  let fixture: ComponentFixture<RegisterformComponent>;
  let service: RegisterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ RegisterformComponent ],
      providers: [
        RegisterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterformComponent);
    component = fixture.componentInstance;
    service = TestBed.get(RegisterService);
    fixture.detectChanges();
  });

  fit ('Deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  fit ('Deberia al enviar llamar al servicio', () => {
    spyOn(service, 'register');
    component.enviar();
    expect(service.register).toHaveBeenCalled();
  });

  fit ('Deberia al hacer click llamar a la funcion enviar', () => {
    spyOn(component, 'enviar');
    const element = fixture.debugElement.query(By.css('.btn')).nativeElement;
    element.click();
    expect(component.enviar).toHaveBeenCalled();
  });
});
