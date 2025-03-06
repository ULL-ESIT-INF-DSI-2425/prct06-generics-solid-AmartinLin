import { NotificationService } from "./EmailService";

export class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}