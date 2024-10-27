import { auth } from "@/auth";
import { getAurinkoAuthUrl } from "@/lib/aurinko";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const session = await auth();
  console.log("session", session);
  return NextResponse.json({ session: session });
};
