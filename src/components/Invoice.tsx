import React from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';

const Invoice = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="bg-[#4C1D95] text-white p-8 rounded-t-lg">
        <div className="text-3xl font-bold mb-4">UIROOM</div>
        <div className="text-5xl font-light">Invoice</div>
        <div className="text-right mt-[-60px]">
          <div>Invoice Number: INV-2024-001</div>
          <div>Invoice Date: March 14, 2024</div>
          <div>Due Date: March 28, 2024</div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-8 p-8 bg-gray-50">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="text-[#4C1D95]" />
            <span>123 Street, City 0000</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-[#4C1D95]" />
            <span>+12 3 456 7890</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-[#4C1D95]" />
            <span>youremail@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="text-[#4C1D95]" />
            <span>Tax ID: 123456789</span>
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-4">RECIPIENT INFORMATION</h2>
          <div className="space-y-2">
            <div className="font-semibold">Client's Name</div>
            <div>Client's Address</div>
            <div>City, State, ZIP</div>
            <div>Client's Phone Number</div>
            <div>Client's Email Address</div>
          </div>
        </div>
      </div>

      {/* Invoice Table */}
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
            <tr className="border-b">
              <td className="p-4">Mechanical system design</td>
              <td className="p-4 text-center">10 hours</td>
              <td className="p-4 text-center">$150</td>
              <td className="p-4 text-right">$1,500</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">CAD modeling and prototyping</td>
              <td className="p-4 text-center">5 hours</td>
              <td className="p-4 text-center">$120</td>
              <td className="p-4 text-right">$600</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Engineering consultation</td>
              <td className="p-4 text-center">3 sessions</td>
              <td className="p-4 text-center">$200</td>
              <td className="p-4 text-right">$600</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-b">
              <td colSpan={2}></td>
              <td className="p-4 text-right font-semibold">Tax (21%)</td>
              <td className="p-4 text-right">$567</td>
            </tr>
            <tr>
              <td colSpan={2}></td>
              <td className="p-4 text-right font-semibold">Total</td>
              <td className="p-4 text-right font-bold">$3,267</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Payment Information */}
      <div className="p-8 space-y-6">
        <div>
          <div className="font-semibold">Payment due by: March 28, 2024</div>
          <div>Payment method: Bank Transfer, PayPal</div>
          <div>Late fees of 5% apply if payment is not received by due date.</div>
        </div>

        <div>
          <div className="font-semibold">Bank details:</div>
          <div>Bank Name: Your Bank Name</div>
          <div>Account Number: 123456789</div>
          <div>SWIFT: BANKCODE123</div>
        </div>

        <hr className="my-8" />

        <div className="italic text-gray-600">
          Thank you for your business! If you have any questions regarding this invoice, please feel free to contact me.
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute right-0 top-1/2 h-96 w-32">
        <div className="relative h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute right-0 h-full w-1 bg-[#4C1D95] opacity-10"
              style={{
                transform: `translateX(${i * 8}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoice;