import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { addDataReducer } from './store/reducers/input-data.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AddDataPageComponent } from './pages/add-data-page/add-data-page.component';
import { NameCardComponent } from './components/name-card/name-card.component';
import { hydrationMetaReducer } from './services/local-storage.service';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { CalledModalComponent } from './components/called-modal/called-modal.component';

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddDataPageComponent,
    NameCardComponent,
    EditModalComponent,
    FormComponent,
    ListComponent,
    CalledModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     StoreModule.forRoot(
      {
        storeData: addDataReducer,
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
