import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <nav className="container flex justify-between items-center h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-zoxn">ZOXN</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button className="bg-zoxn hover:bg-zoxn-dark text-white" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Скачать ZOXN
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
