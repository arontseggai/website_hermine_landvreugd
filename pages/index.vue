<template>
  <div>
    <div class="container">

      <section id="projects-images">
        <ImagesProjectsComponent></ImagesProjectsComponent>
      </section>

      <section id="projects-videos">
        <VideosProjectsComponent></VideosProjectsComponent>
      </section>

      <!-- <hr> -->

      <!-- <section id="socials">
        <SocialsComponent></SocialsComponent>
      </section> -->

      <!-- <section id="footer">
        <FooterComponent></FooterComponent>
      </section> -->

    </div>
    <section id="bottom-footer">
      <BottomFooterComponent></BottomFooterComponent>
    </section>
  </div>
</template>

<script>
  import VideosProjectsComponent from '~/components/videos_components/ProjectsComponent.vue'
  import ImagesProjectsComponent from '~/components/images_components/ProjectsComponent.vue'

  import FooterComponent from '~/components/FooterComponent.vue'
  import SocialsComponent from '~/components/SocialsComponent.vue'
  import BottomFooterComponent from '~/components/BottomFooterComponent.vue'
  import AboutComponent from '~/components/AboutComponent.vue'
  import HeaderComponent from '~/components/HeaderComponent.vue'
  export default {
    components: {
      VideosProjectsComponent,
      ImagesProjectsComponent,
      FooterComponent,
      SocialsComponent,
      BottomFooterComponent,
      AboutComponent,
      HeaderComponent
    }
  }
</script>

<style>

</style>
