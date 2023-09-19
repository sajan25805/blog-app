import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send(`************SBA API****************`);
});

export const apiRoutes: Router = router;
