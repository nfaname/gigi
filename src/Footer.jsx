import "./style/footer.css";
import inst from "./assets/Icons & Logo/Icon_IG.png";
import indeed from "./assets/Icons & Logo/Icon_In.png";

function Footer() {
  return (
    <footer>
      <a
        href="https://www.instagram.com/6i6iverse?igsh=MTY2cjBmd2VwcWlsZQ%3D%3D&utm_source=qr"
        rel="noopener noreferrer"
      >
        <img src={inst} alt="instagram" />
      </a>
      <p>imprint</p>
      <p>privacy police</p>
      <a
        href="https://www.indeed.com/cmp/G&R-Kreativ-Gmbh?from=msg"
        rel="noopener noreferrer"
      >
        <img src={indeed} alt="indeed" />
      </a>
    </footer>
  );
}
export default Footer;
