import BoardHeaderImage from "@/components/team/board-header";
import Bios from "@/components/team/bios";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <BoardHeaderImage />
      <Bios />

      {/* Link to Past Members */}
      <div className="text-center my-16">
        <Link
          href="/team/past"
          className="text-maroon underline hover:text-gray-dark text-lg font-heading"
        >
          View Past Board Members
        </Link>
      </div>
    </div>
  );
}
