const potion = {
    category: "POTIONS",
    name: "Healing Salve",
    image: "https://media.istockphoto.com/id/683722110/photo/artificial-flowers-inside-vase.jpg?s=612x612&w=0&k=20&c=T9ypTzSToa5NSDJWH3eQqfmPOonrIjEh4LgQLY2DD24="
}

const randomNumber = (max) => {
    return Math.floor(Math.random() * max + 1);
}


module.exports = () => {

    return {
        ...potion,
        grade: null,
        slots: null,
        minDamage: null,
        maxDamage: null,
        minArmor: null,
        maxArmor: null,
        effects: [],
        healing: randomNumber(99)
    }
}
