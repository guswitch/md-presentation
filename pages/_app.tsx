import "tailwindcss/tailwind.css";
import "./style.scss";
import Navbar from "../components/navbar";
import { SlidesProvider } from "../context/slides-context";

function MyApp({ Component, pageProps }) {
  return (
    <SlidesProvider>
      <Component {...pageProps} />
    </SlidesProvider>
  );
}

export default MyApp;
