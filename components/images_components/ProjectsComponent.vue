<template>
  <div class="columns is-multiline is-centered sub-container">
    <ProjectComponent
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      :imageFront="project.imageFront"
      :imageBack="project.imageBack"></ProjectComponent>
  </div>
</template>

<script>
  import ProjectComponent from './ProjectComponent.vue'

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
      callGoogleDriveSheet(){
        let that = this
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.googleSheetIdImages}/values/a2:b?key=${process.env.googleApiKey}`
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(response) {
          let projects_array = response.values;
          let array = []

          console.log(projects_array)

          projects_array.forEach( function ( value, i ) {
            let project = {
              id: `project-image-${i}`,
              imageFront: value[0],
              imageBack: value[1]
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
