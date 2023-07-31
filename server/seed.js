const mongoose = require("mongoose");
require("dotenv").config()
const Cat = require("./models/cat");
mongoose.connect(process.env.DATABASE_URL);


async function seed() {
    await Cat.create(
        {
            name: "Felix",
            color: "grey and white",
            hasClaws: true,
            likes: ["sleepin gin the sun", "slipping milk"]
        }
    );
    await Cat.create({
        name: "cedric",
        color: "ginger",
        hasClaws: false,
        likes: ["sleepin gin the sun",]

    });
    console.log("go kity");
    mongoose.disconnect();
}

seed();