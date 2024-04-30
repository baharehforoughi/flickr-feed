import { fetchPublicPhotosByTag } from "@/app/apiUtils";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  tag: string;
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { tag } = context.params;

  try {
    const photoResponse = await fetchPublicPhotosByTag(tag);
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
