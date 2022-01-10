import hermez from "@hermeznetwork/hermezjs";
import { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { initializeHermez } from "../../utils/initialize-hermez";

let hermezInitialization = null;

export default async function Hermez(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await initializeHermez();
}
