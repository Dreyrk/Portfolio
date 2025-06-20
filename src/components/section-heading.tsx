import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-center ${className && `${className}`}`}>{children}</h2>
  );
}
