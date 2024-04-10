import * as JobsController from "../controller/jobs";
import auth from "../middleware/auth";

const router = createRouter();

router.get("/vagas", defineEventHandler(JobsController.findAll));

export default useBase("/api/v1/", router.handler);
