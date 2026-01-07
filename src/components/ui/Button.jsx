import React from 'react';
import Link from 'next/link';

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-rose-100 text-black hover:bg-pink-500 hover:text-white hover:-translate-y-0.5 focus:ring-pink-500 px-8 py-4 text-base font-semibold',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:-translate-y-0.5 focus:ring-slate-300 px-8 py-4 text-base',
    blue: 'bg-blue-500 text-white hover:bg-blue-600 hover:-translate-y-0.5 focus:ring-blue-500 px-8 py-4 text-base font-semibold',
    purple: 'bg-purple-500 text-white hover:bg-purple-600 hover:-translate-y-0.5 focus:ring-purple-500 px-8 py-4 text-base font-semibold',
    ghost: 'text-slate-700 hover:text-pink-500 hover:underline px-4 py-2 text-sm',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
