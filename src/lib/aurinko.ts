"use server";

import { auth } from "@/auth";

export const getAurinkoAuthUrl = async (serviceType: "Google" | "Office365") => {
  const session = await auth();

  if (!auth) {
    throw new Error("Auth not initialized");
  }

  const params = new URLSearchParams({
    clientId : process.env.AURINKO_CLIENT_ID as string,
    serviceType,
    scopes : "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    responseType : "code",
    returnUrl : `${process.env.NEXT_PUBLIC_URL}/api/aurinko/callback`,
  });

  return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`;
};
