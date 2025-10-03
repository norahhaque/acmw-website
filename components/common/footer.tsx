// Simple footer shown at the bottom of all pages
export default function Footer() {
  return (
    <footer className="mt-5 px-3 text-center text-stone-500 mb-3">
      <p className="text-[0.65rem] leading-tight">
        &copy; 2025 UMN ACM-W. All rights reserved.
      </p>
      <p className="text-[0.65rem] leading-tight">
        Site developed by{" "}
        <a
          href="https://www.norahhaque.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Norah Haque
        </a>{" "}
        and maintained by the ACM-W Tech Leads.
      </p>

    </footer>
  );
}
