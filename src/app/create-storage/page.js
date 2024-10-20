import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import StorageForm from "@/components/ui/StorageForm";

const createStorage = () => {
  return (
    <>
      <Navbar />
      <section className="relative pt-36 pb-24 px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
        <StorageForm />
      </section>
      <Footer />
    </>
  );
};

export default createStorage;
