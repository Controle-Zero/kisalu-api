import { Response, NextFunction } from "express";
import CustomRequest from "./types/customRequest";
import DeviceDetector from "node-device-detector";
import { log } from "../libs/log";

const deviceDetector = new DeviceDetector();

export default function detectDevice(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const userAgent = req.headers["user-agent"];
  req.device = deviceDetector.detect(userAgent).device;
  log.info(deviceDetector.detect(userAgent));
  return next();
}
