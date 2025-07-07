'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const NavigationLoader = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // simulate load time

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
      <div className="h-full bg-blue-500 animate-pulse" />
    </div>
  );
};

export default NavigationLoader;