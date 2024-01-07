"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} {...props}>
      {children}
    </button>
  );
}

export default SubmitButton;
