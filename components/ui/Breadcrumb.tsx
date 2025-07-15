// This component follows the shadcn/ui pattern. Please retain credit and avoid modifying unless necessary.

"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"


function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className = "", ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={`text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5 ${className}`}
      {...props}
    />
  )
}

function BreadcrumbItem({ className = "", ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={`inline-flex items-center gap-1.5 ${className}`}
      {...props}
    />
  )
}


function BreadcrumbLink({
  asChild,
  className = "",
  href,
  ...props
}: React.ComponentProps<"a"> & { asChild?: boolean }) {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isActive = isClient && pathname === href
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      href={href}
      data-slot="breadcrumb-link"
      className={`transition-colors hover:text-foreground ${
        isActive ? "font-semibold text-foreground" : "text-muted-foreground"
      } ${className}`}
      {...props}
    />
  )
}

function BreadcrumbPage({ className = "", ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={`text-foreground font-normal ${className}`}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className = "",
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={`[&>svg]:size-3.5 ${className}`}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className = "",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={`flex size-9 items-center justify-center ${className}`}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
