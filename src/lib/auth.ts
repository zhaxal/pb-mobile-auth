import { betterAuth } from "better-auth";
import {
  username,
  organization,
  apiKey,
  phoneNumber,
  openAPI,
} from "better-auth/plugins";

import { pocketbaseAdapter } from "better-auth-pocketbase";

const adapter = pocketbaseAdapter({
  url: process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090",
  collectionPrefix: "ba_", // All collections will be prefixed with this

  // Optional: Generate PocketBase migrations
  generateMigration: true,

  // Admin credentials for migration generation
  authToken: {
    email: process.env.POCKETBASE_EMAIL!,
    password: process.env.POCKETBASE_PASSWORD!,
  },
});

adapter.prototype;

export const auth = betterAuth({
  database: adapter,
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  plugins: [
    username(),
    organization(),
    apiKey(),
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, request) => {
        console.log("Sending OTP to:", phoneNumber, "Code:", code);
      },
      signUpOnVerification: {
        getTempEmail: (phoneNumber) => {
          return `${phoneNumber}@my-site.com`;
        },
      },
    }),
    openAPI(),
  ],
});
