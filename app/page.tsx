import Navbar from "@/components/main-nav";
import MainTable from "@/components/main-table";
export default function Home() {

  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className="text-3xl font-semibold text-center mt-16"> Cities </h1>
      <MainTable></MainTable>
    </div>
  );
}
