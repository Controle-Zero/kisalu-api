import mongoose from "mongoose";
import { getData } from "../mocks/helpers/dataHandler";
import dotenv from "dotenv";

dotenv.config();

describe("MongoDB Tests", () => {
  beforeAll(async () => {
    return await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  test("Test mongo connection", () => {
    expect(mongoose.STATES).toBeTruthy();
  });
});
