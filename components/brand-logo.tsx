type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="100 25 840 355"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="chillin-logo-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1012" height="390" style={{ maskType: "luminance" }}>
        <image href="/logo.jpg" width="1012" height="390" />
      </mask>
      <rect x="0" y="0" width="1012" height="390" fill="currentColor" mask="url(#chillin-logo-mask)" />
    </svg>
  );
}
