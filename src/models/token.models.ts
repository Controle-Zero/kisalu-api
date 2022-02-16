import { ResultDevice } from "node-device-detector";

export default interface Token {
  id: string;
  device: {
    id: string;
    type: string;
    brand: string;
    model: string;
    code?: string;
  };
}
