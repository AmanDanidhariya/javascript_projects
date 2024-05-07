const images = [
  {
    image:
      "https://images.unsplash.com/photo-1714685953621-4e7ae070ee02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    text: "first_image",
  },
  {
    image:
      "https://images.unsplash.com/photo-1714646542331-278803db302f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    text: "second_image",
  },
  {
    image:
      "https://images.unsplash.com/photo-1714332818313-627551693dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    text: "third_image",
  },
  {
    image:
      "https://images.unsplash.com/photo-1714952226774-b7a2c5707e30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
    text: "fourth_image",
  },
  {
    image:
      "https://images.unsplash.com/photo-1714383524948-ebc87c14c0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D",
    text: "fifth_image",
  },
];

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });

    panel.classList.add("active");
  });
});
