import { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component }: AppProps) {
  return (
    <main>
      <Component />
    </main>
  );
}
