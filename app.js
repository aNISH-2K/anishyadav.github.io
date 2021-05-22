var textWrapper = document.querySelector('.text1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.text1 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.text1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 500
    }).add({
        targets: '.text2',
        opacity: 0,
        duration: 750,
        delay: 500
    });