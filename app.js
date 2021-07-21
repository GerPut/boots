
new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './images/boots1.png',
    image2: './images/boots2.png',
    displacementImage: './images/diss.png',

})

TweenMax.staggerFrom(".navbar div", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
}, 0.08);


TweenMax.staggerFrom(".media ul li", 1.5, {
    delay: 1.5,
    opacity: 0,
    x: "-20",
    ease: Expo.easeInOut
}, 0.08);


TweenMax.from(".sponsor img", 1.5, {
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});

TweenMax.from(".sponsor p", 1.5, {
    delay: 1.6,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});


TweenMax.from(".distortion", 1.5, {
    delay: 2,
    opacity: 0,
    y: "20",
    ease: Expo.easeInOut
});

TweenMax.to(".first", 1.5, {
    delay: .2,
    left: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".second", 1.5, {
    delay: .4,
    left: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".third", 1.5, {
    delay: .6,
    left: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".fourth", 1.5, {
    delay: .8,
    left: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to(".fifth", 1.5, {
    delay: 1,
    left: "-100%",
    ease: Expo.easeInOut
});