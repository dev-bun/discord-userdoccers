import React from "react";

export default function Paragraph(props: React.JSX.IntrinsicElements["p"]) {
  return <p className="mb-4 mt-4 text-base leading-6 text-text-light dark:text-text-dark" {...props} />;
}
