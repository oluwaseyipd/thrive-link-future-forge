
import React from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";

interface EmailPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  emailComponent: React.ReactNode;
  subject?: string;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ 
  isOpen, 
  onClose, 
  emailComponent,
  subject = "Email Preview" 
}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      className="max-w-3xl overflow-y-auto max-h-[90vh]"
    >
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Email Preview</h2>
          
          {subject && (
            <div className="mt-3 mb-6 border-b pb-4">
              <div className="flex items-baseline">
                <span className="text-sm font-semibold text-gray-500 w-20">Subject:</span>
                <span className="text-base font-medium text-gray-900">{subject}</span>
              </div>
              <div className="flex items-baseline mt-2">
                <span className="text-sm font-semibold text-gray-500 w-20">To:</span>
                <span className="text-base font-medium text-gray-900">[Recipient]</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="border rounded-lg shadow-sm overflow-hidden">
          {emailComponent}
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose}>Close Preview</Button>
        </div>
      </div>
    </Modal>
  );
};

export default EmailPreview;
