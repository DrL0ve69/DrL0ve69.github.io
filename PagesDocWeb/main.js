// Exemple animation
const newspaperSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const newspaperTiming = {
    duration: 2000,
    iterations: 1, // Infinity pour infini
  };
  
  const newspaper = document.querySelector(".newspaper");
  
  newspaper.addEventListener("click", () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
  });
  

    // Make the ball move to a certain position:
    const f = document.getElementById("foo");
    document.addEventListener(
      "click",
      (ev) => {
        f.style.transform = `translateY(${ev.clientY - 25}px)`;
        f.style.transform += `translateX(${ev.clientX - 25}px)`;
      },
      false,
    );
/*
    const emoji = document.querySelector("#divEmoji"); // element to animate

    const rollingKeyframes = new KeyframeEffect(
      emoji,
      [
        { transform: "translateX(0) rotate(0)" }, // keyframe
        { transform: "translateX(200px) rotate(1.3turn)" }, // keyframe
      ],
      {
        // keyframe options
        duration: 5000,
        direction: "alternate",
        easing: "ease-in-out",
        iterations: "Infinity",
      },
    );
    const rollingAnimation = new Animation(rollingKeyframes, document.timeline);

    // play rofl animation
    rollingAnimation.play();
    */