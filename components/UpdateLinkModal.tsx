'use client';

import { PlaidLinkOnExitCallback, PlaidLinkOnSuccessCallback, PlaidLinkOptions, UpdateLinkModalProps } from '@/types';
import { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const UpdateLinkModal: React.FC<UpdateLinkModalProps> = ({ linkToken }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onSuccess: PlaidLinkOnSuccessCallback = (public_token, metadata) => {
    // Handle the successful update
    console.log('Update successful', public_token, metadata);
    setIsOpen(false);
    // You might want to refresh the page or update the state here
  };

  const onExit: PlaidLinkOnExitCallback = (err, metadata) => {
    // Handle the case when a user exits the Link flow
    console.log('User exited', err, metadata);
    setIsOpen(false);
  };

  const config: PlaidLinkOptions = {
    token: linkToken,
    onSuccess,
    onExit,
  };

  const { open, ready } = usePlaidLink(config);

  useEffect(() => {
    if (ready) {
      open();
    }
  }, [ready, open]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Update Required</h2>
        <p className="mb-4">We need to update your account permissions. Please click the button below to proceed.</p>
        <button
          onClick={() => open()}
          disabled={!ready}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Permissions
        </button>
      </div>
    </div>
  );
};

export default UpdateLinkModal;