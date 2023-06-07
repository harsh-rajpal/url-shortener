import { Router } from "express";
import { handleGenerateNewShortURL, handleGetAnalytics } from "../controllers/url";

const router = Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

export default router;
