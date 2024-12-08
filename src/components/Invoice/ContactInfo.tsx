import React from 'react';
import { MapPin, Phone, Mail, User } from 'lucide-react';
import { SenderInfo, RecipientInfo } from '@/types/invoice';

interface ContactInfoProps {
  sender: SenderInfo;
  recipient: RecipientInfo;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ sender, recipient }) => (
  <div className="grid grid-cols-2 gap-8 p-8 bg-gray-50">
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <MapPin className="text-[#4C1D95]" />
        <span>{sender.address}</span>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="text-[#4C1D95]" />
        <span>{sender.phone}</span>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="text-[#4C1D95]" />
        <span>{sender.email}</span>
      </div>
      <div className="flex items-center gap-3">
        <User className="text-[#4C1D95]" />
        <span>Tax ID: {sender.taxId}</span>
      </div>
    </div>

    <div>
      <h2 className="font-semibold mb-4">RECIPIENT INFORMATION</h2>
      <div className="space-y-2">
        <div className="font-semibold">{recipient.name}</div>
        <div>{recipient.address}</div>
        <div>{recipient.cityStateZip}</div>
        <div>{recipient.phone}</div>
        <div>{recipient.email}</div>
      </div>
    </div>
  </div>
);

export default ContactInfo;