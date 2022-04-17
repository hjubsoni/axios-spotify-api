import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Oval color="#FF5733" height={80} width={80} ariaLabel="loading" />;
    </div>
  );
}
