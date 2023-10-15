gsap.to("#nav", {
  backgroundColor: "#000",
  height: 90,
  duration: 0.2,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#hero", {
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#hero",
    scroller: "body",
    start: "top -3%",
    end: "top -100%",
    scrub: 2,
  },
});

document.querySelector("HTML").addEventListener("mousemove", function (mou) {
  console.log(mou);

  var a = document.querySelector(".cursor");
  a.style.left = mou.x + "px";
  a.style.top = mou.y + "px";

  var b = document.querySelector(".cursor-b");
  b.style.left = mou.x - 100 + "px";
  b.style.top = mou.y - 100 + "px";
});
