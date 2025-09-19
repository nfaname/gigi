import "../style/content_section.css";
import { images, videos } from "../index.js";
import { motion, useScroll, useTransform } from "framer-motion";

function ContentSection() {
  const { scrollYProgress } = useScroll();

  const yShirt = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const yLaunchShirt = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const yBoard = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yVideo = useTransform(scrollYProgress, [0.6, 1], [0, -1000]);
  const ySecondLaunch = useTransform(scrollYProgress, [0.6, 1], [0, -800]);
  const yShoes = useTransform(scrollYProgress, [0.6, 1], [0, -500]);
  const yBoard2 = useTransform(scrollYProgress, [0.6, 1], [0, -200]);

  return (
    <div className="content-section">
      <motion.div style={{ y: yShirt }}>
        <img src={images.img1} alt="img1" />
        <div className="product_description">
          <p>GIGI X QUAD Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: yLaunchShirt }}>
        {" "}
        <img src={images.img2} alt="img2" />
        <div className="product_description">
          <p>GIGI Launch Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: yBoard }}>
        {" "}
        <img src={images.img3} alt="img3" />
        <div className="product_description">
          <p>GIGI Skateboard 2025</p>
          <p>69,99 Euro</p>
        </div>
      </motion.div>
      <div>
        <div>
          <video
            src={videos.video1}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="video"
          />
          <div className="video_description">
            <p> {">>>>> follow"}</p>
            <p>
              <b>GIGI</b>{" "}
            </p>
            <p>{"verse on"}</p>
            <p>
              <a
                href="https://www.instagram.com/6i6iverse?igsh=MTY2cjBmd2VwcWlsZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p>{"<<<<<"}</p>
          </div>
        </div>{" "}
      </div>{" "}
      <motion.div style={{ y: yVideo }}>
        {" "}
        <img src={images.img2} alt="img2" />
        <div className="product_description">
          <p>GIGI Launch Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: ySecondLaunch }}>
        <img src={images.img1} alt="img1" />
        <div className="product_description">
          <p>GIGI X QUAD Shirt 2025</p>
          <p>49,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: yShoes }}>
        <img src={images.img5} alt="img6" />
        <div className="product_description">
          <p>GIGI Shoe 2025</p>
          <p>79,99 Euro</p>
        </div>
      </motion.div>
      <motion.div style={{ y: yBoard2 }}>
        <img src={images.img3} alt="img3" />
        <div className="product_description">
          <p>GIGI Skateboard 2025</p>
          <p>69,99 Euro</p>
        </div>
      </motion.div>
    </div>
  );
}
export default ContentSection;
