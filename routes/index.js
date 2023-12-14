const { Router } = require("express");
const router = Router();
const fs = require("fs");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const renamedFile = removeExtension(file);
  const skip = ["index"].includes(renamedFile);
  if (!skip) {
    router.use(`/${renamedFile}`, require(`./${renamedFile}`));
  }
});

router.get("*", (req, res) => {
    res.status(404).send({message: "Not Found"})
})

module.exports = router;