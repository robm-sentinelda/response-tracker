import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/response.service';
import { Response } from '../response.model';
import { ResponseTypeService } from 'src/app/responseType.service';
import { ResponseType } from '../responseType.model';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  responses: Response[];
  strings: string[];
  responseType: ResponseType;
  responseTypeName: string;
  constructor(private responseService: ResponseService,
              private responseTypeService: ResponseTypeService) { }

  ngOnInit() {
    this.responseService.getResponses().subscribe(data => {
      this.responses = data.map(i => {
        return {
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        } as Response;
      });
    });
  }

  closeStampToString(response: Response) {
    return response.closeStamp.toString();
  }

  close(response: Response) {
    this.responseService.closeResponse(response);
    // this.responseService.updateTime(response);
  }

  update(response: Response) {
    this.responseService.updateResponse(response);
  }

  addBeer(response: Response) {
    this.responseService.addBeer(response);
  }

  delete(response: Response) {
    this.responseService.deleteResponse(response.id);
    this.responseTypeService.updateResponseType(response.responseTypeId);
  }

  owesBeer(numResponses: number): boolean {
    return numResponses > 0;
  }
}
