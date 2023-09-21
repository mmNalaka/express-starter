export default interface MessageResponse<T = any> {
  message: string;
  data?: T
}
