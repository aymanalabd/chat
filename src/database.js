import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://alihmaidi:alihmaidi@cluster0.89sd4b5.mongodb.net/chat?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
