import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";

const IMAGE_PATHS: Record<string, string> = {
  richter:
    "/Users/reveries/.cursor/projects/Users-reveries-projects-fuser-application/assets/richter-47ba1cd7-bde1-4819-bbd7-60b0f4e0bd89.png",
  tags:
    "/Users/reveries/.cursor/projects/Users-reveries-projects-fuser-application/assets/tags-for-sample-c263d86c-a716-4ac8-b8fe-25d0985abe8d.png",
  rothko:
    "/Users/reveries/.cursor/projects/Users-reveries-projects-fuser-application/assets/rothko-tee-09568654-47be-4150-b567-e6e17bb41570.png",
  chateau:
    "/Users/reveries/.cursor/projects/Users-reveries-projects-fuser-application/assets/chateau-marmont-eec15645-77e9-41a1-843b-fa294e091ae5.png",
  basic:
    "/Users/reveries/.cursor/projects/Users-reveries-projects-fuser-application/assets/basic-tee-fb5289ef-fe92-4443-bc81-eb30fe7270e6.png",
};

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, { params }: Context) {
  const { slug } = await params;
  const imagePath = IMAGE_PATHS[slug];

  if (!imagePath) {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }

  try {
    const file = await readFile(imagePath);
    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Unable to load image" }, { status: 500 });
  }
}
