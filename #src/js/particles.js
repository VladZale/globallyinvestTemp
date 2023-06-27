var paricles = 120;
if (screenWidth < 501) {
    paricles = 20;
}else{
    paricles = 120;
}
particlesJS("particles-js", {
    "particles": {
        "number": {"value": paricles, "density": {"enable": false, "value_area": 552.4295060491032}},
        "color": {"value": "#0c24dc"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 1, "color": "#07d3ff"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=014", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0,
            "random": true,
            "anim": {"enable": false, "speed": 1.0549807263136548, "opacity_min": 0, "sync": false}
        },
        "size": {"value": 5, "random": true, "anim": {"enable": true, "speed": 3, "size_min": 0, "sync": true}},
        "line_linked": {
            "enable": true,
            "distance": 160.24100246771155,
            "color": "#4734cf",
            "opacity": 0.5448194083902194,
            "width": 0.8012050123385578
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {"enable": true, "rotateX": 640.9640098708463, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "grab"},
            "onclick": {"enable": false, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 250, "line_linked": {"opacity": 1}},
            "bubble": {
                "distance": 219.1113816189898,
                "size": 48.69141813755329,
                "duration": 2.7591803611280197,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {"distance": 97.38283627510658, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});