export interface Message {
  message: string;
  sendAt: Date | string;
  isSeen: boolean;
  isSender: boolean;
}
