export interface NotificationService {
  notify(message: string): void;
}

export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}