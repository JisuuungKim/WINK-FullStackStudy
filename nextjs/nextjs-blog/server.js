module.exports = {
    env: {
        MONGO_URI: "mongodb+srv://cham0810:sarah0810@@cluster0.hnrex.mongodb.net/test"
    }
}

const dbAddress = "mongodb+srv://cham0810:sarah0810@@cluster0.hnrex.mongodb.net/test";

mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(()=> console.log("MongoDB Connected"))
    .catch((err) => console.log(err));