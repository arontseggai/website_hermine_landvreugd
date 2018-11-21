<template>
  <div>
    <div class="container">

      <section id="header">
        <HeaderComponent :image="'pmd.png'"></HeaderComponent>
      </section>


      <section id="about">
        <AboutComponent></AboutComponent>
      </section>

      <section id="header">
        <HeaderComponent :image="'single_gucci_loafers.png'"></HeaderComponent>
      </section>


      <section id="header">
        <HeaderComponent :image="'mike_single_cover_compressed.png'"></HeaderComponent>
      </section>

      <section id="projects">
        <ProjectsComponent></ProjectsComponent>
      </section>

      <!-- <hr> -->
      <section id="socials">
        <SocialsComponent></SocialsComponent>
      </section>

      <section id="footer">
        <FooterComponent></FooterComponent>
      </section>
  </div>
      <section id="bottom-footer">
          <BottomFooterComponent></BottomFooterComponent>
      </section>
  </div>
</template>

<script>
  import ProjectsComponent from '~/components/ProjectsComponent.vue'
  import FooterComponent from '~/components/FooterComponent.vue'
  import SocialsComponent from '~/components/SocialsComponent.vue'
  import BottomFooterComponent from '~/components/BottomFooterComponent.vue'
  import AboutComponent from '~/components/AboutComponent.vue'
  import HeaderComponent from '~/components/HeaderComponent.vue'

  export default {
    components: {
      ProjectsComponent,
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
