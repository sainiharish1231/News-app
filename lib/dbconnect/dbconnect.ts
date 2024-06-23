import mongoose from "mongoose";

const connectToDatabase = async () => {
  const db_url = process.env.DATABASE_URL;

  if (!db_url)
    throw new Error(
      "Database URL must be defined in the environment variables"
    );

  await mongoose.connect(db_url);
};

export default connectToDatabase;
