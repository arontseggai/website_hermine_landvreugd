<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="contacts author-block box-shadow">
        <div class="content-container">
          <p>Uitgeverij De Harmonie</p>
          <p>Postbus 3547</p>
          <p>1001 AH Amsterdam</p>
          <p>020-6245181</p>
          <p>info@deharmonie.nl</p>
        </div>
        <div class="icons">
          <a href="/"><i class="grow fab fa-facebook-square"></i></a>
          <a href="/"><i class="grow fab fa-instagram"></i></a>
          <a href="/"><i class="grow fab fa-facebook-square"></i></a>
          <a href="/"><i class="grow fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="column is-two-fifths">
      <h2>Stel een vraag</h2>
      <form method="POST" action="https://formspree.io/aefewfew.com">
        <input type="email" name="email" placeholder="Jouw e-mailadres">
        <input name="phonenumber" placeholder="Jouw telefoonnummer"></input>
        <textarea name="message" placeholder="Jouw boodschap" rows="4"></textarea>
        <button type="submit">VERSTUUR</button>
      </form>
    </div>
  </div>
</template>

<style>
.content-container {
  text-align: left;
}

.contacts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.icons {
  margin-top: 25px;
}

form {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

form input, textarea {
  margin-bottom: 15px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  background-color: #282828;
  border: 3px solid #282828;
  border-color: #282828 #535258 #5a5960 #3d3d3d;
  letter-spacing: 1px;
  color: #757575;
}

textarea {
  height: 10em;
}

form button {
  color: #757575;
  text-shadow: 1px 1px #242424;
  letter-spacing: 1px;
  background-color: #232323;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  height: 50px;
  border: 5px solid black;
  border-color: #303030 #131313 #131313 #303030;
}

form button:hover {
  background-color: black;
  cursor: pointer;
}
</style>
