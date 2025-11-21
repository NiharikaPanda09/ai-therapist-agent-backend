import { Inngest } from "inngest";

// Initialize the Inngest client
export const inngest = new Inngest({
  id: "ai-therapy-agent",
  // You can add your Inngest signing key here if you have one
  eventKey:
    "signkey-prod-ea456ef703f4c57382801cf269a2f449a871108a85620300850ac30c6267ed9c",
});

// Export the functions array (this will be populated by the functions.ts file)
export const functions: any[] = [];
