import React from 'react';
import InvoiceHeader from './InvoiceHeader';
import ContactInfo from './ContactInfo';
import InvoiceTable from './InvoiceTable';
import PaymentInfo from './PaymentInfo';
import DecorativeLines from './DecorativeLines';

const Invoice: React.FC = () => {
  const invoiceData = {
    header: {
      invoiceNumber: 'INV-2024-001',
      invoiceDate: 'March 14, 2024',
      dueDate: 'March 28, 2024',
    },
    sender: {
      address: '123 Street, City 0000',
      phone: '+12 3 456 7890',
      email: 'youremail@gmail.com',
      taxId: '123456789',
    },
    recipient: {
      name: "Client's Name",
      address: "Client's Address",
      cityStateZip: 'City, State, ZIP',
      phone: "Client's Phone Number",
      email: "Client's Email Address",
    },
    items: [
      {
        description: 'Mechanical system design',
        quantity: '10 hours',
        unitPrice: 150,
        total: 1500,
      },
      {
        description: 'CAD modeling and prototyping',
        quantity: '5 hours',
        unitPrice: 120,
        total: 600,
      },
      {
        description: 'Engineering consultation',
        quantity: '3 sessions',
        unitPrice: 200,
        total: 600,
      },
    ],
    payment: {
      paymentMethods: ['Bank Transfer', 'PayPal'],
      lateFeePercentage: 5,
      bankDetails: {
        bankName: 'Your Bank Name',
        accountNumber: '123456789',
        swiftCode: 'BANKCODE123',
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      <InvoiceHeader {...invoiceData.header} />
      <ContactInfo sender={invoiceData.sender} recipient={invoiceData.recipient} />
      <InvoiceTable items={invoiceData.items} taxRate={21} />
      <PaymentInfo
        dueDate={invoiceData.header.dueDate}
        paymentMethods={invoiceData.payment.paymentMethods}
        lateFeePercentage={invoiceData.payment.lateFeePercentage}
        bankDetails={invoiceData.payment.bankDetails}
      />
      <DecorativeLines />
    </div>
  );
};

export default Invoice;