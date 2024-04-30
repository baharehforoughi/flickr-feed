import { fetchPublicPhotos } from "@/app/apiUtils";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const photoResponse = await fetchPublicPhotos();
    return NextResponse.json(photoResponse);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error - photos_public fetch failed",
      },
      { status: 500 }
    );
  }
}
