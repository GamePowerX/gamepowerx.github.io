<script lang="ts">
  export let words: string[];

  export let word = 0;
  let write = words[word];
  let blink = true;

  function nextWord() {
    word = (word + 1) % words.length;
    write = "";
    blink = false;

    nextLetter();
  }

  function nextLetter() {
    if (write.length >= words[word].length) {
      blink = true;

      setTimeout(nextWord, 2000 + 5000 * Math.random());
    } else {
      write += words[word][write.length];

      setTimeout(nextLetter, 50 + 100 * Math.random());
    }
  }

  setTimeout(nextWord, 2000);
</script>

<span class:blink>{write}</span>

<style>
  span {
    color: #ffcc00;
  }

  span.blink::after {
    width: 9px;
    animation: 1s ease-in-out infinite blink;
    margin-left: -9px;
  }

  span::after {
    content: "";
    display: inline-block;
    width: 2px;
    height: 18px;
    margin-left: -2px;
    margin-bottom: -4px;
    backdrop-filter: invert(100%);
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
