const data = [
    {
        id: 1,
        imageSrc:
            "img/crypto/1.svg",
    },
    {
        id: 2,
        imageSrc:
            "img/crypto/decentraland.svg",

    },
    {
        id: 3,
        imageSrc:
            "img/crypto/zcash.svg",

    },
    {
        id: 4,
        imageSrc:
            "img/crypto/ethereum.svg",
    },
    {
        id: 5,
        imageSrc:
            "img/crypto/uniswap.svg",
    },
    {
        id: 6,
        imageSrc:
            "img/NFT/NFTCP.png",
    },
    {
        id: 7,
        imageSrc:
            "img/crypto/chainlink.svg",
    },
    {
        id: 8,
        imageSrc:
            "img/crypto/litecoin.svg",

    },
    {
        id: 9,
        imageSrc:
            "img/NFT/NFTBACC.png",

    },
    {
        id: 10,
        imageSrc:
            "img/crypto/solana.svg",

    },
    {
        id: 11,
        imageSrc:
            "img/NFT/NFTCK.png",

    },
    {
        id: 12,
        imageSrc:
            "img/NFT/NFTLL-3.jpg",
    },
    {
        id: 13,
        imageSrc:
            "img/NFT/NFTFRWC.png",

    },
    {
        id: 14,
        imageSrc:
            "img/NFT/NFTMAYC.jpg",

    },
    {
        id: 15,
        imageSrc:
            "img/NFT/NFTCC-2.png",

    },
    {
        id: 15,
        imageSrc:
            "img/NFT/NFTDF-3.png",

    },
];

gsap.registerPlugin(ScrollTrigger);
const screenWidth = window.screen.width

const renderImages = () => {
    data.forEach((d) => {
        const img = document.createElement("img"),
            fig = document.createElement("figure");
        img.src = d.imageSrc;
        fig.appendChild(img);
        document.querySelector("div.crypto-piggy-bank__icons").appendChild(fig);
    });
};

renderImages();

const images = document.querySelectorAll("div.crypto-piggy-bank__icons > figure");

if (screenWidth > 1001) {
    gsap.to(images[0], {duration: 0, left: "93%", top: "0%", zIndex: 0});
    gsap.to(images[1], {duration: 0, left: "83%", top: "0%", zIndex: 0});
    gsap.to(images[2], {duration: 0, left: "73%", top: "0%", zIndex: 0});
    gsap.to(images[3], {duration: 0, left: "73%", top: "10%", zIndex: 0});
    gsap.to(images[4], {duration: 0, left: "63%", top: "10%", zIndex: 0});
    gsap.to(images[5], {duration: 0, left: "73%", top: "20%", zIndex: 0});
    gsap.to(images[6], {duration: 0, left: "93%", top: "10%", zIndex: 0});
    gsap.to(images[7], {duration: 0, left: "63%", top: "0%", zIndex: 0});
    gsap.to(images[8], {duration: 0, left: "93%", top: "20%", zIndex: 0});
    gsap.to(images[9], {duration: 0, left: "83%", top: "10%", zIndex: 0});
    gsap.to(images[10], {duration: 0, left: "83%", top: "20%", zIndex: 0});
    gsap.to(images[11], {duration: 0, left: "63%", top: "20%", zIndex: 0});
    gsap.to(images[12], {duration: 0, left: "83%", top: "30%", zIndex: 0});
    gsap.to(images[13], {duration: 0, left: "93%", top: "30%", zIndex: 0});
    gsap.to(images[14], {duration: 0, left: "73%", top: "30%", zIndex: 0});
    gsap.to(images[15], {duration: 0, left: "63%", top: "30%", zIndex: 0});

} else {
    gsap.to(images[0], {duration: 0, right: "0%", top: "0%", zIndex: 0});
    gsap.to(images[1], {duration: 0, right: "30%", top: "0%", zIndex: 0});
    gsap.to(images[2], {duration: 0, right: "60%", top: "0%", zIndex: 0});
    gsap.to(images[3], {duration: 0, right: "60%", top: "10%", zIndex: 0});
    gsap.to(images[4], {duration: 0, right: "90%", top: "10%", zIndex: 0});
    gsap.to(images[5], {duration: 0, right: "60%", top: "20%", zIndex: 0});
    gsap.to(images[6], {duration: 0, right: "0%", top: "10%", zIndex: 0});
    gsap.to(images[7], {duration: 0, right: "90%", top: "0%", zIndex: 0});
    gsap.to(images[8], {duration: 0, right: "0%", top: "20%", zIndex: 0});
    gsap.to(images[9], {duration: 0, right: "30%", top: "10%", zIndex: 0});
    gsap.to(images[10], {duration: 0, right: "30%", top: "20%", zIndex: 0});
    gsap.to(images[11], {duration: 0, right: "90%", top: "20%", zIndex: 0});
    gsap.to(images[12], {duration: 0, right: "0%", top: "30%", zIndex: 0});
    gsap.to(images[13], {duration: 0, right: "60%", top: "30%", zIndex: 0});
    gsap.to(images[14], {duration: 0, right: "30%", top: "30%", zIndex: 0});
    gsap.to(images[15], {duration: 0, right: "90%", top: "30%", zIndex: 0});
}

var _start = "-=35 top";
var _end = "+=55%";
if (last_known_scroll_position < 600) {
    _start = "-=10 top";
    _end = "+=35%";
}

img = gsap.timeline({
    scrollTrigger: {
        trigger: ".crypto-piggy-bank",
        start: "top +=85%",
        end: "top +=85%",
        toggleActions: "play none reverse",
    }
})
    .to(".crypto-piggy-bank__box", {
        opacity: 1,
        duration: 1.5,
        ease: Expo.easeInOut,
    })

const defaultScrollConfig = {
    trigger: ".crypto-piggy-bank__container",
    start: _start,
    end: _end,
    scrub: 1,
};

const endPosition = {
    top: "78%",
    rotate: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
};


const tl = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[0], {
        top: "65%",
        rotate: -20,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[0], {...endPosition});

const tl1 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[1], {
        top: "65%",
        rotate: -20,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[1], {...endPosition});

const tl2 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[2], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[2], {...endPosition});

const tl3 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[3], {
        top: "65%",
        rotate: -30,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[3], {...endPosition});

const tl4 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[4], {
        top: "65%",
        rotate: 30,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[4], {...endPosition});

const tl5 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[5], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[5], {...endPosition});

const tl6 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[6], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[6], {...endPosition});
const tl7 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[7], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[7], {...endPosition});
const tl8 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[8], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[8], {...endPosition});
const tl9 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[9], {
        top: "65%",
        rotate: 30,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[9], {...endPosition});
const tl10 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[10], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[10], {...endPosition});
const tl11 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[11], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[11], {...endPosition});
const tl12 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[12], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[12], {...endPosition});
const tl13 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[13], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[13], {...endPosition});
const tl14 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[14], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[14], {...endPosition});
const tl15 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(images[15], {
        top: "65%",
        rotate: 17,
        left: "60%",
        transform: "translate(-50%, -50%)",
    })
    .to(images[15], {...endPosition});
const tl16 = gsap
    .timeline({scrollTrigger: {...defaultScrollConfig}})
    .to(".Screen__img img", {
        opacity: 1,
        duration: 2,
    }, "=+4.5")