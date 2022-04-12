import app from "../apps/httpApp";
import { log } from "../libs/log";


app.listen(8080, () => {
    log.info("App is running on a single cluster");
})