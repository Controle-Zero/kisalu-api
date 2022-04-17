import app from "../apps/http";
import { log } from "../libs/log";


app.listen(8080, () => {
    log.info("App is running on a single cluster");
})