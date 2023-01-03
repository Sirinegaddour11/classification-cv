import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CandidatesDashboardComponent } from './components/candidates/candidates-dashboard/candidates-dashboard.component';
import { CandidatesGridComponent } from './components/candidates/candidates-grid/candidates-grid.component';
import { CandidatesListComponent } from './components/candidates/candidates-list/candidates-list.component';
import { CandidatesDetailComponent } from './components/candidates/candidates-detail/candidates-detail.component';
import { MyResumeComponent } from './components/candidates/my-resume/my-resume.component';
import { DashboardCandidatComponent } from './components/candidates/candidates-dashboard/dashboard-candidat/dashboard-candidat.component';
import { HeaderDashboardCandidatComponent } from './components/candidates/candidates-dashboard/header-dashboard-candidat/header-dashboard-candidat.component';
import { CandidatesSavedJobsComponent } from './components/candidates/candidates-dashboard/candidates-saved-jobs/candidates-saved-jobs.component';
import { CandidatesManageJobsComponent } from './components/candidates/candidates-dashboard/candidates-manage-jobs/candidates-manage-jobs.component';
import { CandidatesResumeComponent } from './components/candidates/candidates-dashboard/candidates-resume/candidates-resume.component';
import { CandidatesPasswordComponent } from './components/candidates/candidates-dashboard/candidates-password/candidates-password.component';
import { CandidatesProfileComponent } from './components/candidates/candidates-dashboard/candidates-profile/candidates-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EmployerDashboardComponent } from './components/employer/employer-dashboard/employer-dashboard.component';
import { EmployerDetailComponent } from './components/employer/employer-detail/employer-detail.component';
import { EmployerGridComponent } from './components/employer/employer-grid/employer-grid.component';
import { EmployerListComponent } from './components/employer/employer-list/employer-list.component';
import { EmployerMapComponent } from './components/employer/employer-map/employer-map.component';
import { PostAJobComponent } from './components/employer/post-a-job/post-a-job.component';
import { DashboardEmployerComponent } from './components/employer/employer-dashboard/dashboard-employer/dashboard-employer.component';
import { PostNewJobComponent } from './components/employer/employer-dashboard/post-new-job/post-new-job.component';
import { ManageCandidatesComponent } from './components/employer/employer-dashboard/manage-candidates/manage-candidates.component';
import { DashboardPasswordComponent } from './components/employer/employer-dashboard/dashboard-password/dashboard-password.component';
import { DashboardProfileComponent } from './components/employer/employer-dashboard/dashboard-profile/dashboard-profile.component';
import { HeaderDashboardEmployerComponent } from './components/employer/employer-dashboard/header-dashboard-employer/header-dashboard-employer.component';
import { ManageJobsComponent } from './components/employer/employer-dashboard/manage-jobs/manage-jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobGridComponent } from './components/job/job-grid/job-grid.component';
import { JobDetailComponent } from './components/job/job-detail/job-detail.component';
import { RecherchePipe } from './pipes/recherche.pipe';
import { MessageComponent } from './components/message/message.component';
import { TestComponent } from './components/test/test.component';
import { JitsiComponent } from './components/jitsi/jitsi.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    CandidatesDashboardComponent,
    CandidatesGridComponent,
    CandidatesListComponent,
    CandidatesDetailComponent,
    MyResumeComponent,
    DashboardCandidatComponent,
    HeaderDashboardCandidatComponent,
    CandidatesSavedJobsComponent,
    CandidatesManageJobsComponent,
    CandidatesResumeComponent,
    CandidatesPasswordComponent,
    CandidatesProfileComponent,
    ContactUsComponent,
    EmployerDashboardComponent,
    EmployerDetailComponent,
    EmployerGridComponent,
    EmployerListComponent,
    EmployerMapComponent,
    PostAJobComponent,
    DashboardEmployerComponent,
    PostNewJobComponent,
    ManageCandidatesComponent,
    DashboardPasswordComponent,
    DashboardProfileComponent,
    HeaderDashboardEmployerComponent,
    ManageJobsComponent,
    JobGridComponent,
    JobDetailComponent,
    RecherchePipe,
    MessageComponent,
    TestComponent,
    JitsiComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
