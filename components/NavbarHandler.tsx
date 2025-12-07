// import { usePathname } from "next/navigation";
// import Navbar from "@/components/Navbar";

// const HIDDEN_Navbar =[
//   '/sign-in',
//   '/sign-up',
//   '/dashboard'
// ]
// const NavbarHandler =() =>{
//   const pathname = usePathname();

// const isAuthorProtectedPage = HIDDEN_Navbar.some(path => pathname.startsWith(path));
// if(isAuthorProtectedPage){
//   return null;
// }
// return <Navbar />
// };

// export default NavbarHandler;