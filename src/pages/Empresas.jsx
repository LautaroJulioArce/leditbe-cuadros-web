import { useNavigate } from "react-router-dom";
import GalleryPage from "./GalleryPage";

const images = import.meta.glob(
  '/src/images/empresas/*.{png,jpg,jpeg,webp}',
  { eager: true, import: 'default' }
);

export default function Empresas() {
  const navigate = useNavigate();
  const imageList = Object.values(images);
  return <GalleryPage title="Empresas" imageList={imageList} onBack={() => navigate('/')} />;
}