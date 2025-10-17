import { Router } from "express";

const router = Router();
export default router;

router.get("/", (_, res) => {
    res.send("Welcome to the API!");
});