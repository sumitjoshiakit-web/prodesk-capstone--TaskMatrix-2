import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "TaskMatrix — Work, organized",
    template: "%s | TaskMatrix",
  },
  description:
    "A focused workspace to bring your tasks, priorities, and progress into one clear view.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
