import Express from "express";
const router = Express.Router();

router.use((req, res, next) => {
  console.log("time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("Birds home page");
});

router.get("/about", (req, res) => {
  res.send("About birds");
});
export default router;
