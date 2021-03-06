import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UserService } from "./users/user.service"
@NgModule({ 
	declarations: [ 
		AppComponent, UsersComponent, UsersLoginComponent, UsersDashboardComponent
	], 
	imports: [
		BrowserModule,
		FormsModule, // <-- Include module in our AppModules
		HttpModule, // <-- Include module in our AppModules
    AppRoutingModule
	], 
	providers: [UserService], 
	bootstrap: [AppComponent] 
}) 
export class AppModule { }