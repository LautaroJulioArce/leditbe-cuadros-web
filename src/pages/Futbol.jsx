import { useNavigate } from "react-router-dom";
import GalleryPage from "./GalleryPage";
const images = import.meta.glob(
  '/src/images/futbol/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
);

export default function Futbol() {
  const navigate = useNavigate();
  const imageList = Object.values(images);
  return <GalleryPage title="Escudos de Fútbol" imageList={imageList} onBack={() => navigate('/')} />;
}