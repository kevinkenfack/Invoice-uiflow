import React from 'react';

interface InvoiceItem {
  description: string;
  quantity: string;
  unitPrice: number;
  total: number;
}

interface InvoiceTableProps {
  items: InvoiceItem[];
  taxRate: number;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ items, taxRate }) => {
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount;

  return (
    <div className="p-8">
      <table className="w-full">
        <thead className="bg-[#4C1D95] text-white">
          <tr>
            <th className="p-4 text-left">Description</th>
            <th className="p-4 text-center">Quantity</th>
            <th className="p-4 text-center">Unit Price</th>
            <th className="p-4 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{item.description}</td>
              <td className="p-4 text-center">{item.quantity}</td>
              <td className="p-4 text-center">${item.unitPrice}</td>
              <td className="p-4 text-right">${item.total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-b">
            <td colSpan={2}></td>
            <td className="p-4 text-right font-semibold">Tax ({taxRate}%)</td>
            <td className="p-4 text-right">${taxAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td className="p-4 text-right font-semibold">Total</td>
            <td className="p-4 text-right font-bold">${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceTable;