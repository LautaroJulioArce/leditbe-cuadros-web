import { useNavigate } from "react-router-dom";
import GalleryPage from "./GalleryPage";

const images = import.meta.glob(
  '/src/images/zen/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
);

export default function Zen() {
  const navigate = useNavigate();
  const imageList = Object.values(images);
  return <GalleryPage title="🧘 Zen" imageList={imageList} onBack={() => navigate('/')} />;
}