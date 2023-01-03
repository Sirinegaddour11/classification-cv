import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CandidatesDashboardComponent } from './components/candidates/candidates-dashboard/candidates-dashboard.component';
import { CandidatesManageJobsComponent } from './components/candidates/candidates-dashboard/candidates-manage-jobs/candidates-manage-jobs.component';
import { CandidatesPasswordComponent } from './components/candidates/candidates-dashboard/candidates-password/candidates-password.component';
import { CandidatesProfileComponent } from './components/candidates/candidates-dashboard/candidates-profile/candidates-profile.component';
import { CandidatesResumeComponent } from './components/candidates/candidates-dashboard/candidates-resume/candidates-resume.component';
import { CandidatesSavedJobsComponent } from './components/candidates/candidates-dashboard/candidates-saved-jobs/candidates-saved-jobs.component';
import { DashboardCandidatComponent } from './components/candidates/candidates-dashboard/dashboard-candidat/dashboard-candidat.component';
import { CandidatesDetailComponent } from './components/candidates/candidates-detail/candidates-detail.component';
import { CandidatesGridComponent } from './components/candidates/candidates-grid/candidates-grid.component';
import { CandidatesListComponent } from './components/candidates/candidates-list/candidates-list.component';
import { MyResumeComponent } from './components/candidates/my-resume/my-resume.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardEmployerComponent } from './components/employer/employer-dashboard/dashboard-employer/dashboard-employer.component';
import { DashboardPasswordComponent } from './components/employer/employer-dashboard/dashboard-password/dashboard-password.component';
import { DashboardProfileComponent } from './components/employer/employer-dashboard/dashboard-profile/dashboard-profile.component';
import { EmployerDashboardComponent } from './components/employer/employer-dashboard/employer-dashboard.component';
import { ManageCandidatesComponent } from './components/employer/employer-dashboard/manage-candidates/manage-candidates.component';
import { ManageJobsComponent } from './components/employer/employer-dashboard/manage-jobs/manage-jobs.component';
import { PostNewJobComponent } from './components/employer/employer-dashboard/post-new-job/post-new-job.component';
import { EmployerDetailComponent } from './components/employer/employer-detail/employer-detail.component';
import { EmployerGridComponent } from './components/employer/employer-grid/employer-grid.component';
import { EmployerListComponent } from './components/employer/employer-list/employer-list.component';
import { EmployerMapComponent } from './components/employer/employer-map/employer-map.component';
import { PostAJobComponent } from './components/employer/post-a-job/post-a-job.component';
import { HomeComponent } from './components/home/home.component';
import { JitsiComponent } from './components/jitsi/jitsi.component';
import { JobDetailComponent } from './components/job/job-detail/job-detail.component';
import { JobGridComponent } from './components/job/job-grid/job-grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';
import { CandidatGuard } from './guards/candidat.guard';
import { EmployerGuard } from './guards/employer.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '', component: HomeComponent, children: [
      { path: 'update-job/:id', component: PostNewJobComponent },
      { path: '', component: LayoutComponent },
      { path: 'post', component: PostAJobComponent },
      { path: 'about', component: AboutComponent },
      // { path: 'services', component: ServicesWeOfferComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'message', component: MessageComponent },


      //employer
      { path: 'employer-grid', component: EmployerGridComponent },
      { path: 'employer-list', component: EmployerListComponent },
      { path: 'employer-detail/:id', component: EmployerDetailComponent },
      { path: 'employer-map', component: EmployerMapComponent },

      //employer dashboard
      {
        path: 'employer-dashboard', canActivate: [EmployerGuard], component: EmployerDashboardComponent, children: [
          { path: 'dashboard-profile', component: DashboardProfileComponent },
          { path: 'dashboard-password', component: DashboardPasswordComponent },
          { path: 'manage-candidates/:id', component: ManageCandidatesComponent },
          { path: 'post-new-job', component: PostNewJobComponent },
          { path: 'dashboard-employer', component: DashboardEmployerComponent },
          {
            path: 'manage-jobs', component: ManageJobsComponent
          },
        ]
      },

      //listing
      { path: 'job-grid', component: JobGridComponent },
      { path: 'job-detail/:id', component: JobDetailComponent },

      //search
      // { path: 'search-filter', component: SearchFilterComponent },
      //{ path: 'search-classic', component: SearchClassicComponent },
      //{ path: 'search', component: SearchComponent },

      //candidates
      { path: 'candidates-grid', component: CandidatesGridComponent },
      { path: 'candidates-list', component: CandidatesListComponent },
      { path: 'candidates-detail/:id', component: CandidatesDetailComponent },
      { path: 'cv', component: MyResumeComponent },

      //candidates-dashboard
      {
        path: 'candidates-dashboard', canActivate: [CandidatGuard], component: CandidatesDashboardComponent, children: [
          { path: 'candidates-profile', component: CandidatesProfileComponent },
          { path: 'candidates-password', component: CandidatesPasswordComponent },
          { path: 'candidates-resume', component: CandidatesResumeComponent },
          { path: 'candidates-manage-jobs', component: CandidatesManageJobsComponent },
          { path: 'candidates-saved-jobs', component: CandidatesSavedJobsComponent },
          { path: 'dashboard-candidat', component: DashboardCandidatComponent },
          { path: 'video', component:JitsiComponent },
        ]
      },


      //Login



      //{ path: '**', pathMatch: 'full', component: PagenotfoundComponentComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
