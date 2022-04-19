export enum UserStatus {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
}
export default interface SocketUserInfo {
  [key: string]: {
    socketID: string;
    status: UserStatus | string;
  };
}
