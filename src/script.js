(async () => {
  //await loadConfettiPreset(tsParticles);

  await tsParticles.load("tsparticles", {
    particles: {
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: [
          {
            src: "../img/code_tag.png",
            width: 32,
            height: 32
          },
          {
            src: "../img/barcode_tag.png",
            width: 320,
            height: 320
          },
          {
            src: "../img/dr_cow.png",
            width: 320,
            height: 320
          },
          {
            src: "../img/code_bell.png",
            width: 320,
            height: 320
          },
          {
            src: "../img/blank_bell.png",
            width: 320,
            height: 320
          },
          {
            src: "../img/blank_tag.png",
            width: 320,
            height: 320
          },
          {
            src: "../img/daisy.png",
            width: 320,
            height: 320
          },
        ],
        polygon: {
          nb_sides: 5
        },
        stroke: {
          color: "#000000",
          width: 0
        },
        type: "image"
      },
      life: {
        duration: {
          value: 0
        }
      },
      number: {
        value: 15,
        max: 0,
        density: {
          enable: true
        }
      },
      move: {
        enable: true,
        gravity: {
          enable: false
        },
        decay: 0,
        direction: "bottom",
        speed: 2,
        outModes: {
          default: "out",
          left: "out",
          right: "out",
          bottom: "out",
          top: "out"
        }
      },
      size: {
        value: 100
      },
      opacity: {
        value: 1,
        animation: {
          enable: false
        }
      }
    },
    background: {
      color: "#232323",
      opacity: 0
    },
    emitters: [],
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse"
        }
      }
    },
    preset: "confetti"
  });
})();
