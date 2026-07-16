import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrumb({ items }) {
  return (
    <nav className="mb-10 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate-400">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index !== 0 && <FaChevronRight className="text-xs" />}

            {index === items.length - 1 ? (
              <span className="text-white font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-cyan-400 transition">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
