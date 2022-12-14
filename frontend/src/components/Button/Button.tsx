import React, { useMemo } from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  const cn = useMemo(() => {
    return `${className} bg-primary-black text-primary-white px-6 py-3 rounded-md font-inter text-sm`;
  }, [className]);

  return <button className={cn}>{text}</button>;
}
