import { useNavigate } from "react-router-dom";
import GalleryPage from "./GalleryPage";

const images = import.meta.glob(
  '/src/images/decoinfantil/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
);

export default function Decoinfantil() {
  const navigate = useNavigate();
  const imageList = Object.values(images);
  return <GalleryPage title="Deco infantil" imageList={imageList} onBack={() => navigate('/')} />;
}