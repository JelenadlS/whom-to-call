import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { createAndUpdatePersonReducer } from './store/reducers/create-and-update-person.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AddPersonPageComponent } from './pages/add-person-page/add-person-page.component';
import { NameCardComponent } from './components/name-card/name-card.component';
import { updateLocalStorage } from './services/local-storage.service';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { FormComponent } from './components/form/form.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CalledModalComponent } from './components/called-modal/called-modal.component';

export const metaReducers: MetaReducer[] = [updateLocalStorage];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddPersonPageComponent,
    NameCardComponent,
    EditModalComponent,
    FormComponent,
    ListPageComponent,
    CalledModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     StoreModule.forRoot(
      {
        storeData: createAndUpdatePersonReducer,
      },
      { metaReducers },
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
