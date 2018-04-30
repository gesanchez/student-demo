import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

  public enviar(): void {
    this.service.register();
  }

}
