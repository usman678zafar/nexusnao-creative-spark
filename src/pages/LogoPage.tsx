import Navbar from "@/components/Navbar";
import LogoExport from "@/components/LogoExport";

const LogoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nexus-gray to-white">
      <Navbar />

      <div className="pt-32 px-6 pb-16">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 p-8">
          <LogoExport />
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
