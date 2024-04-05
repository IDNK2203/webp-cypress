function Dashboardayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return <main className="flex h-screen overflow-hidden">{children}</main>;
}

export default Dashboardayout;
