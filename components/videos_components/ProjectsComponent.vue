<template>
  <div class="columns is-multiline is-centered sub-container">
    <ProjectComponent
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      :title="project.title"
      :url="project.url"
      :photo="project.photo"
      :videoHost="project.videoHost"></ProjectComponent>
  </div>
</template>

<script>
  import ProjectComponent from './ProjectComponent.vue'
  import { getIdFromURL } from 'vue-youtube-embed'

  export default {
    components: {
      ProjectComponent
    },
    data() {
      return {
        projects: []
      }
    },
    methods: {
      checkVideoHost(url) {
        if(url.includes('vimeo')) {
          return 'vimeo';
        } else if (url.includes('youtube')) {
          return 'youtube';
        } else {
          return null;
        }
      },
      getVideoThumbnail(id) {
        return `https://img.youtube.com/vi/${id}/0.jpg`
      },
      callGoogleDriveSheet(){
        let that = this
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.googleSheetIdVideos}/values/a2:b?key=${process.env.googleApiKey}`
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(response) {
          let projects_array = response.values;
          let array = []

          console.log(projects_array)

          projects_array.forEach( function ( value, i ) {
            let videoHost = that.checkVideoHost(value[0]);
            let id = value[0];
            let thumbnail = false;
            if(videoHost === "youtube") {
              id = getIdFromURL(value[0]);
              thumbnail = that.getVideoThumbnail(id);
            }
            let project = {
              id: `project-${i}`,
              url: id,
              photo: thumbnail ? thumbnail : null,
              videoHost: videoHost,
            }
            console.log(project);
            array.push(project);
          });
          that.projects = array
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
    mounted(){
      this.callGoogleDriveSheet()
    }
  }
</script>
