import { useNavigate } from "react-router-dom";
import GalleryPage from "./GalleryPage";

const images = import.meta.glob(
  '/src/images/musica/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
);

export default function Musica() {
  const navigate = useNavigate();
  const imageList = Object.values(images);
  return <GalleryPage title="🎵 Música" imageList={imageList} onBack={() => navigate('/')} />;
}