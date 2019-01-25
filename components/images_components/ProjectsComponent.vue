<template>
  <div class="container">
    <masonry
      :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
      :gutter="{default: '30px', 700: '15px'}">
      <div class="author-block box-shadow mobile-margin">
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

@media screen and (max-width: 400px) {
  .mobile-margin {
    margin: 0.75rem;
  }
}

  .author-block {
    padding: 40px 0;
    text-align: center;
    background-color: #494850;
    border-color: #5a5960 #3d3d3d #282828 #535258;
    border-style: solid;
    border-width: 5px;
    margin-bottom: 40px;
  }

  .author-block h1 {
    font-family: "Helvetica Neue", Helvetica;
    color: #FFF987;
    text-shadow: 1px 1px #0b0b00;
    font-size: 22px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .author-block h3 {
    font-family: "Helvetica Neue", Helvetica;
    color: #FFF987;
    text-shadow: 1px 1px #0b0b00;
    margin-top: 2px;
    font-size: 20px;
    margin: 0;
    margin-bottom: 15px;
    font-weight: 300;
    text-shadow: 1px 1px #242424;
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
