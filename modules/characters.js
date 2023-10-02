const ShortUniqueId = require("short-unique-id");
const { randomUUID } = new ShortUniqueId({ length: 10 });

module.exports = [
    {
        id: randomUUID(),
        image: "https://i.ibb.co/gzDJQPQ/Character1-face1.png",
        bigImage: "https://i.ibb.co/c2yT8Y4/Character1-face1.png"
    },
    {
        id: randomUUID(),
        image: "https://i.ibb.co/0sjXMBc/Character2-face1.png",
        bigImage: "https://i.ibb.co/80VcQk5/Character2-face1.png"
    },
    {
        id: randomUUID(),
        image: "https://i.ibb.co/16vzdDB/Character3-face1.png",
        bigImage: "https://i.ibb.co/D9k56LH/Character3-face1.png"
    },
    {
        id: randomUUID(),
        image: "https://i.ibb.co/8cs3NP3/Character4-face1.png",
        bigImage: "https://i.ibb.co/0KWV6y8/Character4-face1.png"
    },
    {
        id: randomUUID(),
        image: "https://i.ibb.co/CbbzRJF/Character5-face1.png",
        bigImage: "https://i.ibb.co/2tFVmhg/Character5-face1.png"
    },
    {
        id: randomUUID(),
        image: "https://cdna.artstation.com/p/assets/images/images/064/631/164/large/elena-danilova-codm-character-darksheperd.jpg?1688399978",
        bigImage: "https://cdna.artstation.com/p/assets/images/images/064/631/164/large/elena-danilova-codm-character-darksheperd.jpg?1688399978"
    },
    {
        id: randomUUID(),
        image: "https://cdna.artstation.com/p/assets/images/images/064/579/538/large/emre-ekmekci-emre-ekmekci-bosun.jpg?1688265468",
        bigImage: "https://cdna.artstation.com/p/assets/images/images/064/579/538/large/emre-ekmekci-emre-ekmekci-bosun.jpg?1688265468"
    },
    {
        id: randomUUID(),
        image: "https://cdna.artstation.com/p/assets/images/images/064/255/430/large/james-greenwood-xeno-beast-render-copy.jpg?1687466733",
        bigImage: "https://cdna.artstation.com/p/assets/images/images/064/255/430/large/james-greenwood-xeno-beast-render-copy.jpg?1687466733g"
    },
]

