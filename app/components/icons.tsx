import type { SVGProps } from "react";

type IconName =
  | "derma"
  | "laser"
  | "syringe"
  | "glow"
  | "hair"
  | "body";

const paths: Record<IconName, React.ReactNode> = {
  derma: (
    <>
      <path d="M12 3c3.5 2.5 6 5.8 6 9.5A6 6 0 0 1 6 12.5C6 8.8 8.5 5.5 12 3Z" />
      <path d="M9.5 13.5c.7 1 1.6 1.6 2.5 1.6" />
    </>
  ),
  laser: (
    <>
      <path d="M5 19 19 5" />
      <path d="M14 5h5v5" />
      <circle cx="7" cy="17" r="2.4" />
    </>
  ),
  syringe: (
    <>
      <path d="m13 4 7 7" />
      <path d="m16 7-9.5 9.5L4 20l-1 1" />
      <path d="m8.5 11.5 2 2M11 9l2 2" />
    </>
  ),
  glow: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  hair: (
    <>
      <path d="M5 20c0-6 3-12 7-12s7 6 7 12" />
      <path d="M8 20c0-4 1.6-8 4-8s4 4 4 8" />
    </>
  ),
  body: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 8v7M9 11l3 1 3-1M10 21l2-6 2 6" />
    </>
  ),
};

export function ServiceIcon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
