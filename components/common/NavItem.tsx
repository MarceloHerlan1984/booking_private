import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { createElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItemProps {
  href: string;
  title: string;
  icon: React.ElementType;
  showTooltip: boolean;
}

function NavItem({ href, title, icon, showTooltip }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        pathname === href
          ? "text-orange-500"
          : "hover:bg-transparent hover:underline",
        "flex items-center justify-start gap-2"
      )}
    >
      {showTooltip ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>{createElement(icon, { size: 20 })}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <>
          <span>{createElement(icon, { size: 20 })}</span>
          <p className="text-sm font-semibold">{title}</p>
        </>
      )}
    </Link>
  );
}

export default NavItem;
