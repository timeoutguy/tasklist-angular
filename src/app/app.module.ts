import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { MainComponent } from './pages/main/main.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAddTaskComponent } from './components/modal-add-task/modal-add-task.component';
import { ModalAddListComponent } from './components/modal-add-list/modal-add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskCardComponent,
    MainComponent,
    SearchBarComponent,
    ModalAddTaskComponent,
    ModalAddListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
