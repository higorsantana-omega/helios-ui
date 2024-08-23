export function TickIcon (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16} color={"#ffffff"} fill={"none"} {...props}>
      <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth={props?.strokeWidth ?? '1.5'} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
