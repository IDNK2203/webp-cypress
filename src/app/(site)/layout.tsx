import Header from "@/components/landingPage/header";

function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-background">
      <Header />
      {children}
    </main>
  );
}

export default HomePageLayout;
