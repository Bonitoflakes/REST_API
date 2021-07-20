import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_LOCAL || MONGO_LOCAL,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log(`MonogDB connected! ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export { connectDB };
