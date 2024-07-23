import React, { useState } from "react";
import "./WorkGallery.scss";
import CloseIcon from "@mui/icons-material/Close";


const WorkGallery = () => {
  let data = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1720247521711-46ff4ff80894?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1719850361252-aa68c265b85a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1720170717116-3b3180ed20c9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      img: "https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1720247521711-46ff4ff80894?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      img: "https://plus.unsplash.com/premium_photo-1719850361252-aa68c265b85a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1720170717116-3b3180ed20c9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (img) => {
    console.log(img);
    setTempImg(img);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImg} alt="" />
        <CloseIcon className="closeIcon" onClick={() => setModel(false)}/>
      </div>
      <div className="Wg_container">
        {data.map((item, i) => {
          return (
            <div className="photos" key={i} onClick={() => getImg(item.img)}>
              <img src={item.img } alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkGallery;
