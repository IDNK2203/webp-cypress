function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-background">{children}</main>;
}

export default HomePageLayout;
