// import { Inter } from "next/font/google";
import { NavBar } from "./NavBar";

// const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
     <div className="flex overflow-x-hidden" id="">
        {/* <NavBar/> */}
       <main className="w-dvw">
        {children}
       </main>
       
     </div>
  );
}
