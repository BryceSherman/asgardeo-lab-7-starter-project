// I used LLM to help me figure this out, but I understand how it works and can explain it if needed. 

import { SignedIn, SignedOut, SignInButton } from "@asgardeo/react";

export default function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>

      <SignedOut>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Please sign in to view this page.</h2>
          <SignInButton />
        </div>
      </SignedOut>
    </>
  );
}