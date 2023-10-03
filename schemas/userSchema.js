const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    character: {
        type: {},
        required: true
    },
    experience: {
        type: Number,
        required: false,
        default: 0
    },
    tokens: {
        type: Number,
        required: false,
        default: 99
    },
    inventory: {
        type: [],
        required: false,
        default: [{
            category: "WEAPON",
            name: "SS",
            image: "https://media.istockphoto.com/id/601924068/photo/two-blade-battle-axe-isolated.jpg?s=612x612&w=0&k=20&c=YGB2Czu_mrOKEehHBKkQLaSDkj6u_H_nxBWGAi8LAgM=",
            minDamage: 1,
            maxDamage: 5,
            grade: "D",
            slots: 0,
            effects: []
        }]
    }
});

const user = mongoose.model("type16_users", userSchema);

module.exports = user;
