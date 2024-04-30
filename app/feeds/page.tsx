import Image from "next/image";

const Feed = async () => {
  const BASE_URL = "http://localhost:3000/api";

  const res = await fetch(`${BASE_URL}/feeds/`);
  const photos: string[] = await res.json();
  return (
    <div>
      <ul className="grid grid-cols-5 gap-4">
        {photos.map((item, index) => (
          <li key={index}>
            <Image src={item} alt={item} width={300} height={200} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
