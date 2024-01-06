import Header from "@/components/header";

function HomePageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;
