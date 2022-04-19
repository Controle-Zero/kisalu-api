import mongoose from "mongoose";
import { getData } from "../mocks/helpers/dataHandler";

jest.setTimeout(20000);

describe("MongoDB Tests", () => {
  beforeAll(async () => {
    return await mongoose.connect("mongodb://localhost:27017/kisalu_local");
  });

  afterAll(() => {
    mongoose.disconnect();
  });

  test.todo("Test mongo connection");
});
