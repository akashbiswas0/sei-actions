import { NextRequest, NextResponse } from "next/server";
import { ethers } from "ethers";

// POST /api/tx/transfer -> returns transaction data for Sei network
// Body: { toAddress: string, amountSei: string | number, memo?: string }
// Wallet will handle signing and submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { toAddress, amountSei, memo } = body ?? {};

    if (!toAddress || amountSei === undefined) {
      return NextResponse.json({ error: "Missing toAddress or amountSei" }, { status: 400 });
    }

    // Validate Ethereum address format
    if (!ethers.isAddress(toAddress)) {
      return NextResponse.json({ error: "Invalid toAddress format" }, { status: 400 });
    }

    const amtNum = Number(amountSei);
    if (!Number.isFinite(amtNum) || amtNum <= 0) {
      return NextResponse.json({ error: "amountSei must be a positive number" }, { status: 400 });
    }

    // Convert to wei (18 decimals)
    const amountWei = ethers.parseEther(amtNum.toString());

    // Create transaction data
    const txData = {
      to: toAddress,
      value: amountWei,
      // Note: Data field removed for Sei EVM compatibility
      // Memo functionality is not supported in Sei EVM transactions
    };

    return NextResponse.json({
      type: "TRANSFER_SEI_TEMPLATE",
      toAddress: toAddress,
      amountWei: amountWei.toString(),
      amountSei: amtNum,
      memo: memo ?? null,
      transactionData: txData,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}