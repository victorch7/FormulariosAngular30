import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListMessagesComponent } from './add-list-messages.component';

describe('AddListMessagesComponent', () => {
  let component: AddListMessagesComponent;
  let fixture: ComponentFixture<AddListMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListMessagesComponent]
    });
    fixture = TestBed.createComponent(AddListMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
