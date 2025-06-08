import PocketBase from "pocketbase";

// Create and export a PocketBase client instance

if (!process.env.NEXT_PUBLIC_POCKETBASE_URL) {
  throw new Error("NEXT_PUBLIC_POCKETBASE_URL is not defined");
}

export const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

// Helper to check if user is authenticated
export const isUserAuthenticated = () => {
  return pb.authStore.isValid;
};

// Export auth store for reactivity
export const authStore = pb.authStore;
