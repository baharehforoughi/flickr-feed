async function fetchPhotos(apiUrl: string): Promise<string[]> {
  const response: Response = await fetch(apiUrl, { next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error("Failed to fetch photo data");
  }

  const responseData: any = await response.json();

  const mediaUrls: string[] = responseData.items.map(
    (item: any) => item.media.m
  );

  return mediaUrls;
}

export async function fetchPublicPhotosByTag(tags: string): Promise<string[]> {
  const apiUrl: string = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`;
  return fetchPhotos(apiUrl);
}

export async function fetchPublicPhotos(): Promise<string[]> {
  const apiUrl: string = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1`;
  return fetchPhotos(apiUrl);
}
