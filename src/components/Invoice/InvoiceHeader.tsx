import React from 'react';
import { InvoiceHeader as HeaderProps } from '@/types/invoice';

const InvoiceHeader: React.FC<HeaderProps> = ({ invoiceNumber, invoiceDate, dueDate }) => (
  <div className="bg-[#4C1D95] text-white p-8 rounded-t-lg">
    <div className="text-3xl font-bold mb-4">UIROOM</div>
    <div className="text-5xl font-light">Invoice</div>
    <div className="text-right mt-[-60px]">
      <div>Invoice Number: {invoiceNumber}</div>
      <div>Invoice Date: {invoiceDate}</div>
      <div>Due Date: {dueDate}</div>
    </div>
  </div>
);

export default InvoiceHeader;