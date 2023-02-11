import mongoose from "mongoose";

const URI: string = "mongodb://localhost/mstodo";

export const dbConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log(`connection to databse established`);
  } catch (error) {
    console.log(`error connecting to databse`);
  }
};
