import { SideBarUserUse } from "./_features/SideBarUserUse";

export const metadata = {
  title: "Agent Dashboard",
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen">
      <SideBarUserUse />
      {children}
    </div>
  );
}
