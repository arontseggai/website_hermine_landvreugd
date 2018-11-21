<template>
    <div class="sub-container">
        <ul class="socials-list">
            <li class=" socials-item">
                <a target="_blank" href="https://www.facebook.com/elpapimikeydinero">
                    <img src="~/assets/img/FacebookG.png" alt="Facebook social button">
                </a>
            </li>
            <li class=" socials-item">
                <a target="_blank" href="https://www.instagram.com/papimikeydinero">
                    <img src="~/assets/img/InstagramG.png" alt="Instagram social button">
                </a>
            </li>
            <li class=" socials-item">
                <a target="_blank" href="https://open.spotify.com/artist/1ZzkltVaZc6BPQ9tluPtGi?si=z13cUgZsRfizVURJ5RCJzw">
                    <img src="~/assets/img/SpotifyG.png" alt="Spotify social button">
                </a>
            </li>
            <li class=" socials-item">
                <a target="_blank" href="https://www.youtube.com/backstagebastards">
                    <img src="~/assets/img/YoutubeG.png" alt="Youtube social button">
                </a>
            </li>                                    
        </ul>
    </div>
</template>

<style>
    .socials-list {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0px 25%;
    }
    .socials-list .socials-item img {
        height: 50px;
        -webkit-transition: 200ms; /* Safari */
        transition: 200ms;        
    }
    .socials-list a {
        border: none;
    }
    .socials-list a:hover img {
        margin-top: -10px;
    }
</style>

