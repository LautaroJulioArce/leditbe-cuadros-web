import { useParams } from "react-router-dom";

export default function Category() {
  const { name } = useParams();

  const images = import.meta.glob(
    `/src/images/${name}/*.{png,jpg,jpeg,webp}`,
    {
      eager: true,
    }
  );

  const imageList = Object.values(images);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-light mb-10 capitalize">
        {name}
      </h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {imageList.map((img, index) => (
          <img
            key={index}
            src={img.default}
            alt=""
            className="w-full rounded-2xl shadow-xl hover:scale-[1.02] transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}