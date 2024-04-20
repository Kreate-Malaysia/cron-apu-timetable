import Link from "next/link";
import Navbar from "@/components/Navbar";
export const runtime = 'edge';
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}
