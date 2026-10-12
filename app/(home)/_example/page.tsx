'use client';

import { useEffect, useState } from 'react';

export default function ExamplePage() {
  const [login, setLogin] = useState(true);

  const handleLogout = () => {
    setLogin(false);

    const broadcastChannel = new BroadcastChannel('bcc-practical');

    broadcastChannel.postMessage({
      logout: true,
    });
  };

  useEffect(() => {

  }, [login]);

  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center text-5xl">
      {login ? 'Hey abhay, you are logged in' : 'You are Logged out'}
      {login && (
        <button
          onClick={handleLogout}
          className="bg-foreground p-1 rounded-md cursor-pointer"
        >
          log out
        </button>
      )}
    </div>
  );
}
