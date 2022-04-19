import app from "../apps/http";
import { initMongoDB } from "../libs/configs/mongodb";
import { log } from "../libs/log";

app.listen(8080, async () => {
  initMongoDB();
  log.info("App is running on a single cluster");
});
