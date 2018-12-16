<template>
  <div class="columns is-centered">
    <div class="column is-two-fifths" style="background-color: green; height: 200px;"></div>
    <div class="column is-two-fifths">
      <form method="POST" action="https://formspree.io/aefewfew.com">
        <input type="email" name="email" placeholder="Your email">
          <input name="phonenumber" placeholder="Your phone number"></input>
        <textarea name="message" placeholder="Test Message"></textarea>
        <button type="submit">VERSTUUR</button>
      </form>
    </div>
  </div>
</template>

<style>
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
  }

  form button {
    background-color: #232323;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 18px;
    height: 40px;
    border: 1px solid black;
    line-height: 40px;
  }

  form button:hover {
    background-color: black;
    cursor: pointer;
  }
</style>
