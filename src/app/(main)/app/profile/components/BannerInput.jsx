export default function BannerInput() {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.onerror = () => {
      console.error("Erro ao ler o arquivo");
    };

    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return <></>;
}
