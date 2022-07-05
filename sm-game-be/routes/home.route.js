import express from "express";

const homeRoute = express.Router();

homeRoute.get("/", async (req, res) => {

  return res.status(200).json({
    message: "okie"
  });
});

homeRoute.post("/", async (req, res) => {
  console.log(req.body)

  return res.status(200).json({
    message: "post okie"
  });
});

export default homeRoute;
