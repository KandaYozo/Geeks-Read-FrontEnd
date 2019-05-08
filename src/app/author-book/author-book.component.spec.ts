import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule, MatDividerModule, MatListModule, MatButtonModule } from '@angular/material';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthorBookComponent } from './author-book.component';



describe('AuthorBookComponent', () => {
  let component: AuthorBookComponent;
  let fixture: ComponentFixture<AuthorBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorBookComponent],
      imports: [MatMenuModule, MatDividerModule, MatListModule,
        MatButtonModule, MaterialModule,
        HttpClientModule]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AuthorBookComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
