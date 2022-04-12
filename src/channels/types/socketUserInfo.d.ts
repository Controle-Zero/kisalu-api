export default interface SocketUserInfo {
  [key: string]: {
    socketID: string;
    connected: boolean;
  };
}
