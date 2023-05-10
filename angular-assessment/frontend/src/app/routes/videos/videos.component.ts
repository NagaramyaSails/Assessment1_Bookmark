import { Component, OnChanges, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, OnChanges {

  // video: any = document.getElementById("video");
  videos: any;
  videoUrl!: string;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getVideos().subscribe((val: any)=> {
      console.log(val["videos"]);
      this.videos = val["videos"];
      // this.video.src = this.videos[0].url;
      console.log(this.videos[0].url);
      this.videoUrl = this.videos[0].url;

    })

  }

  ngOnChanges() {

  }

  // onClick() {
  //   // this.taskService.getVideos().subscribe((val: any)=> {
  //   //   console.log(val["videos"]);
  //   //   this.videos = val["videos"];
  //   //   // this.video.src = this.videos[0].url;
  //   //   console.log(this.videos[0].url);

  //   //   this.videoUrl = this.videos[0].url;
  //   //   console.log(this.videoUrl);

  //   // })

  // }

  playVideo(url: string) {
    this.videoUrl = url;
    console.log(this.videoUrl);

  }
}
