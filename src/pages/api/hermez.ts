import { NextApiRequest, NextApiResponse } from "next";
import { initializeHermez } from "../../utils/initialize-hermez";

export default async function Hermez(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await initializeHermez();
}
