// src/App.tsx
import React from 'react';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      {/* Bu yerda boshqa sahifalar yoki content joylashadi */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold">Welcome to Ashyo!</h1>
        <p className="mt-2 text-gray-600">Bu yerga sahifa kontenti joylashadi.</p>
      </main>
    </div>
  );
};

export default App;
