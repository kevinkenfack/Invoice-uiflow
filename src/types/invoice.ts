export interface InvoiceHeader {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
}

export interface SenderInfo {
  address: string;
  phone: string;
  email: string;
  taxId: string;
}

export interface RecipientInfo {
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  email: string;
}

export interface InvoiceItem {
  description: string;
  quantity: string;
  unitPrice: number;
  total: number;
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  swiftCode: string;
}

export interface PaymentDetails {
  paymentMethods: string[];
  lateFeePercentage: number;
  bankDetails: BankDetails;
}

export interface InvoiceData {
  header: InvoiceHeader;
  sender: SenderInfo;
  recipient: RecipientInfo;
  items: InvoiceItem[];
  payment: PaymentDetails;
  taxRate: number;
}