<template>
    <header>
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <figure class="image">
                    <img class="header-image" :src="require(`assets/img/${image}`)" alt="Header image Mikey Dinero Single Cover">
                </figure>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
    header {
        padding: 80px 0px;
    }
</style>
