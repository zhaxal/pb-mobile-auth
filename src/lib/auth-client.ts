import { createAuthClient } from "better-auth/react";
import {
  usernameClient,
  organizationClient,
  apiKeyClient,
  phoneNumberClient,
} from "better-auth/client/plugins";

export const authClient = createAuthClient({
  plugins: [
    usernameClient(),
    organizationClient(),
    apiKeyClient(),
    phoneNumberClient(),
  ],
});
