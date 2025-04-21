var timeLine = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        // markers: true,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true
    }
});

timeLine. 
    to("#top", {
        top: "-100%"
    }, 'trigger').
    to("#bottom", {
        bottom: "-100%"
    }, 'trigger').
    to("#top-h", {
        top: "80%"
    }, 'trigger').
    to("#bottom-h", {
        bottom: "-80%"
    }, 'trigger').
    to("#content", {
        marginTop: "0%"
    }, 'trigger')