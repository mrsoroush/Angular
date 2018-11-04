import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-log-service',
  templateUrl: './log-service.component.html',
  styleUrls: ['./log-service.component.css'],
  providers: [LoggingService]
})
export class LogServiceComponent implements OnInit {

  message = "hello World!";

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.loggingService.logMessage(this.message);
  }

}
