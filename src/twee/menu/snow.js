/**
 * @file CSS snow animation
 * @author double-a-stories
 * @license MIT-0
 */

$(window).on("sm.passage.shown", function () {
  const titleArt = document.querySelector(".title-art");
  if (!titleArt) {
    return;
  }
  for (let i = 0; i < 30; i++) {
    const el = document.createElement("div");
    el.className = "snow";
    el.setAttribute("role", "presentation");
    const diameter = Math.random() * 10 + 10; // px
    const props = {
      "--offset-x-start": Math.random() * 150 - 50 + "%",
      "--offset-x-delta": Math.random() * 5 - 10 + "%",
      "animation-duration": Math.random() * 10 + 10 + "s",
      "animation-delay": -(Math.random() * 10 + 10) + "s",
      width: diameter + "px",
      height: diameter + "px",
    };
    for (const p in props) {
      el.style.setProperty(p, props[p]);
    }
    titleArt.appendChild(el);
  }
});
