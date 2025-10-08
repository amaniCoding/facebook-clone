import Contacts from "./components/home/contacts";
import Feed from "./components/home/feed";
import NavBar from "./components/home/navbar";
import SideBar from "./components/home/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="flex md:pt-[73px] pt-[55px]">
        <SideBar />
        <Feed />
        <Contacts />
      </div>
    </div>
  );
}
