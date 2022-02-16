import { Request } from "express";
import { ResultDevice } from "node-device-detector";
import Token from "../../models/token.models";

export default interface CustomRequest extends Request {
  id: string;
  body: any;
  headers: any;
  device: any;
}
