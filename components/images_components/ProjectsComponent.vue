<template>
  <div class="container">
    <masonry
      :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
      :gutter="{default: '30px', 700: '15px'}">
      <div class="author-block">
        <h1>Hermine Landvreugd</h1>
        <h3>Kinderboeken</h3>
      </div>
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

    /* -webkit-box-shadow: 3px 5px 10px 1px rgba(51, 51, 51, 0.69);
    -moz-box-shadow: 3px 5px 10px 1px rgba(51, 51, 51, 0.69);
    box-shadow: 3px 5px 10px 1px rgba(51, 51, 51, 0.69); */

    -webkit-box-shadow: 9px 10px 18px -1px rgba(0,0,0,0.65);
    -moz-box-shadow: 9px 10px 18px -1px rgba(0,0,0,0.65);
    box-shadow: 9px 10px 18px -1px rgba(0,0,0,0.65);

    background-color:   rgba(245, 245, 245, 0.42);

    margin-bottom: 20px;
    /* border: 1px solid #2c2b2f; */
    padding: 40px 0;
    text-align: center;
  }

  .author-block h1 {
    color: rgba(0, 0, 0, 0.87);
    font-size: 22px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .author-block h3 {
    color: rgba(0, 0, 0, 0.87);
    margin-top: 2px;
    font-size: 20px;
    margin: 0;
    margin-bottom: 15px;
    font-weight: 300;
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
