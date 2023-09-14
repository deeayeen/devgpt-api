import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function index() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bolder",
        letterSpacing: "0.2em",
      }}
      className={inter.className}
    >
      devgpt-api
    </div>
  );
}
