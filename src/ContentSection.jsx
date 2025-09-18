import "./style/content_section.css";
import img1 from "./assets/Image/QUAD SQUAD X GIGI T-SHIRT.png";
import img2 from "./assets/Image/93659765-CCCD-4D03-86F7-4C69FE4D5327.jpg";
import img3 from "./assets/Image/IMG_0952_.JPG";
import video1 from "./assets/Video/AboutVideo_Desktop.mp4";
import img5 from "./assets/Image/Asset 5.png";
import { motion, useScroll, useTransform } from "framer-motion";

function ContentSection() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y4 = useTransform(scrollYProgress, [0.4, 1], [0, -1300]);
  const y5 = useTransform(scrollYProgress, [0.7, 1], [0, -1100]);
  const y6 = useTransform(scrollYProgress, [0.72, 1], [0, -800]);
  const y7 = useTransform(scrollYProgress, [0.7, 1], [0, -500]);

  return (
    <div className="content-section">
      <motion.div style={{ y: y1 }}>
        <img src={img1} alt="img1" />
        <div className="product_description">
          <p>GIGI X QUAD Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: y2 }}>
        {" "}
        <img src={img2} alt="img2" />
        <div className="product_description">
          <p>GIGI Launch Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: y3 }}>
        {" "}
        <img src={img3} alt="img3" />
        <div className="product_description">
          <p>GIGI Skateboard 2025</p>
          <p>69,99 Euro</p>
        </div>
      </motion.div>
      <div>
        {" "}
        <video
          src={video1}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="video"
        />
        <div className="video_description"></div>
      </div>{" "}
      <motion.div style={{ y: y4 }}>
        {" "}
        <img src={img2} alt="img2" />
        <div className="product_description">
          <p>GIGI Launch Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: y5 }}>
        <img src={img1} alt="img1" />
        <div className="product_description">
          <p>GIGI X QUAD Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: y6 }}>
        <img src={img5} alt="img6" />
        <div className="product_description">
          <p>GIGI Shoe 2025</p>
          <p>79,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: y7 }}>
        <img src={img3} alt="img3" />
        <div className="product_description">
          <p>GIGI Skateboard 2025</p>
          <p>69,99 Euro</p>
        </div>
      </motion.div>
    </div>
  );
}
export default ContentSection;
