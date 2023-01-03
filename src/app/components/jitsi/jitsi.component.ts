import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;
@Component({
  selector: 'app-jitsi',
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.css']
})
export class JitsiComponent implements OnInit {
  isAudioMuted= false;
  isVideoMuted= false ;
  room:any;
  user: any;
  api: any;
  domin: string='meet.jit.si';
  options : any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.room='jitsMeetingAPIExample';
    this.user={
      name:'Coding wall'
    }
  }

  ngAfterViewInit():void{
    this.options={
      roomName: this.room,
      width:900,
      height: 500,
      configOverWrite:{ proJoinPageEnable: false},
      interfaceConfigOverWrite:{
        TILE_VIEW_MAX_COLUMS:8
      },parentNode: document.querySelector('#jitsi-iframe'),
      userInfo:{
        displayName: this.user.name
      }
    }
    this.api=new JitsiMeetExternalAPI(this.domin,this.options);
    this.api.addEventListenner({
      redyToClose: this.handleClose,
      participantLeft: this.handleParticipantLeft,
      participantJoin: this.handleParticipantJoin,
      videoConferenceJoined: this.handlevideoConferenceJoined,
      videoConferenceLeft: this.handlevideoConferenceLeft,
      audioMuteStatusChanged: this.handleaudioMuteStatusChanged,
      videoStatus: this.handlevideoStatus,
      
    })
  }
  handleClose(){
    console.log("handleClose")
  }
  handleParticipantLeft=async(participant: any)=>{
   const data= await this.getParticipants()
  }
  handleParticipantJoin=async(participant: any)=>{
    const data= await this.getParticipants()
 
  }
handlevideoConferenceJoined=async(participant: any)=>{
  const data= await this.getParticipants()
 
}
handlevideoConferenceLeft=()=>{
 this.router.navigate(['/'])
}
handleaudioMuteStatusChanged=(audio: any)=>{
  console.log("handleaudioMuteStatusChanged",audio)
}
handlevideoStatus=(video:any)=>{
  console.log("handlevideoMuteStatusChanged",video)
}
getParticipants(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.api.getParticipantsInfo())
    },500);
  })
}

executeCommand(comand: string){
  this.api.executeCommand(comand);
  if(comand=='hangup'){
    this.router.navigate(['/'])
  }
  if(comand=='toggleAudio'){
    this.isAudioMuted=!this.isAudioMuted;
  }
  if(comand=='toggleVideo'){
    this.isVideoMuted=!this.isVideoMuted;
  }
}
}
