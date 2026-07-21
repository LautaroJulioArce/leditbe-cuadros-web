import { useNavigate } from "react-router-dom";
import GalleryPage from "./GalleryPage";

const images = import.meta.glob(
  '/src/images/anime/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
);

export default function Anime() {
  const navigate = useNavigate();
  const imageList = Object.values(images);
  return <GalleryPage title="🎌 Anime" imageList={imageList} onBack={() => navigate('/')} />;
}