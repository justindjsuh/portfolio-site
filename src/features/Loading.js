import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    const el = document.getElementsByClassName("loading_page")[0];
    setTimeout(() => {
      el.style.opacity = 0;
      el.remove();
    }, 3000);
  });
  return (
    <div className="loading_page">
      <p className="loading_name">JUSTIN SUH</p>
      <p className="loading_title">PORTFOLIO</p>
    </div>
  );
};

export default Loading;
