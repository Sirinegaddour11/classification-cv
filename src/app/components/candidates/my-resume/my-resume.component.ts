import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {
  fileName: string;
  filePreview: string
  candidat: any
  education: any
  experience: any
  competence: any
  lang: any
  img:any
  score: Number = 0
  id = this.activatedRoute.snapshot.params['id']
  userconnect = JSON.parse(localStorage.getItem('userconnect')!)
  state = JSON.parse(localStorage.getItem('state')!)
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.getCandidatById()
    this.getAllEducation()
    this.getAllExperience()
    this.getAllCompetence()
    this.getAllLangage()
   
  }
  getCandidatById() {
    this.candidatService.getCandidatById(this.userconnect.iduser).subscribe(
      (res: any) => {
        this.candidat = res
        console.log('candidat : ', this.candidat)
      }
    )
  }
  getAllEducation() {
    this.candidatService.getAllEducation().subscribe(
      (res: any) => {
        this.education = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("education", this.education)
      })
  }

  getAllExperience() {
    this.candidatService.getAllExperience().subscribe(
      (res: any) => {
        this.experience = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("experience", this.experience)
      })
  }
  getAllCompetence() {
    this.candidatService.getAllCompetence().subscribe(
      (res: any) => {
        let total = 0
        let nombre = 0
        this.competence = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("competence", this.competence)
        this.competence.forEach((element: any) => {
          total = total + Number(element.niveau)
          nombre = nombre +1
        }
        )
        this.score = total/nombre
        console.log('Score :',this.score ,'%')
      })
  }
  getAllLangage() {
    this.candidatService.getAllLangage().subscribe(
      (res: any) => {
        this.lang = res.filter((element: any) => (element.candidat.iduser == this.userconnect.iduser))
        console.log("lang", this.lang)
      })
  }

  // public openPDF(): void {
  //   let DATA: any = document.getElementById('htmlData');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'pt', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('my-resume.pdf');
  //   });
  // }

  // onFileChanged(event: { target: { files: any[]; }; }) {
  //   let reader = new FileReader();
  //   if (event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.fileName = file.name + " " + file.type;
  //       const doc = new jsPDF();
  //       const base64ImgString = (reader.result as string).split(',')[1];
  //       doc.addImage(base64ImgString, 15, 40, 50, 50);
  //       this.filePreview = 'data:image/png' + ';base64,' + base64ImgString;
  //       doc.save('TestPDF')
  //     };
  //   }
  // }
  // sanitize(url: string) {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
  
  openPDF(): void {
    let PDF = new jsPDF('p','pt','a4');
    PDF.setFontSize(20);
    let pdfelement:any = document.getElementById('htmlData');

    PDF.html(pdfelement, {
        callback: function(doc) {
           doc.save('1.pdf');
        },
        x:-300,
        y: -300
    });
  }
}
