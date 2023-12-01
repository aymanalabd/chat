import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb://0.0.0.0:27017/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
