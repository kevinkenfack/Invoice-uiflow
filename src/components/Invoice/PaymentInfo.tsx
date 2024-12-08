import React from 'react';

interface PaymentInfoProps {
  dueDate: string;
  paymentMethods: string[];
  lateFeePercentage: number;
  bankDetails: {
    bankName: string;
    accountNumber: string;
    swiftCode: string;
  };
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  dueDate,
  paymentMethods,
  lateFeePercentage,
  bankDetails,
}) => (
  <div className="p-8 space-y-6">
    <div>
      <div className="font-semibold">Payment due by: {dueDate}</div>
      <div>Payment method: {paymentMethods.join(', ')}</div>
      <div>Late fees of {lateFeePercentage}% apply if payment is not received by due date.</div>
    </div>

    <div>
      <div className="font-semibold">Bank details:</div>
      <div>Bank Name: {bankDetails.bankName}</div>
      <div>Account Number: {bankDetails.accountNumber}</div>
      <div>SWIFT: {bankDetails.swiftCode}</div>
    </div>

    <hr className="my-8" />

    <div className="italic text-gray-600">
      Thank you for your business! If you have any questions regarding this invoice, please feel free to contact me.
    </div>
  </div>
);