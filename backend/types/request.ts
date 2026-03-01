export interface NewRequestPayload {
  name: string;
  phone: string;
  problem?: string;
}

export interface SendNotificationResult {
  success: boolean;
  sentCount: number;
  totalCount?: number;
  message?: string;
  failures?: Array<{ chatId: string; success?: boolean; error?: unknown }>;
}
