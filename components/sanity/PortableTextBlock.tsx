// components/sanity/PortableTextBlock.tsx
'use client';

import { PortableText } from '@portabletext/react';

export function PortableTextBlock({ value }: { value: any }) {
  if (!value || value.length === 0) return null;

  return (
    <PortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => <p className="mb-3">{children}</p>,
          // możesz dodać h2, h3, blockquote itp. jeśli chcesz
        },
        marks: {
          link: ({ value, children }) => (
            <a
              href={value?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {children}
            </a>
          ),
        },
      }}
    />
  );
}