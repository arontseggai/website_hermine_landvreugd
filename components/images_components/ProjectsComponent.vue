<template>
  <div class="container">
    <masonry
      :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
      :gutter="{default: '30px', 700: '15px'}">
      <div class="author-block"><h1>Hermine Landvreugd</h1></div>
      <project-component
        v-for="project in projects"
        :key="project.id"
        :id="project.id"
        :imageFront="project.imageFront"
        :imageBack="project.imageBack"></project-component>
    </masonry>
  </div>
</template>

<style>
  .author-block {

    -webkit-box-shadow: 3px 5px 10px 1px rgba(51, 51, 51, 0.69);
    -moz-box-shadow: 3px 5px 10px 1px rgba(51, 51, 51, 0.69);
    box-shadow: 3px 5px 10px 1px rgba(51, 51, 51, 0.69);
    margin-bottom: 20px;
    /* border: 1px solid #2c2b2f; */
    padding: 15px 0px;
  }

  .author-block h1 {
    color: black;
    font-weight: 600;
    text-align: center;
    font-family: 'Permanent Marker', cursive;
  }

  .container {
    margin-top: 60px;
  }
</style>

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
      callGoogleDriveSheet() {
        let that = this
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.googleSheetIdImages}/values/a2:b?key=${process.env.googleApiKey}`
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            let projects_array = response.values;
            let array = []
            projects_array.forEach(function(value, i) {
              let project = {
                id: `project-image-${i}`,
                imageFront: value[0],
                imageBack: value[1]
              }
              array.push(project);
            });
            that.projects = array
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    mounted() {
      this.callGoogleDriveSheet()
    }
  }
</script>
