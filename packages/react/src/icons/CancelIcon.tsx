export function CancelIcon (props: React.SVGProps<SVGSVGElement>)  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={16}
      height={16} 
      color={"#ffffff"}
      fill={"none"} 
      {...props}
    >
      <path
        d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
        stroke="currentColor"
        strokeWidth={props?.strokeWidth ?? '1.5'}
        strokeLinecap="round"
        strokeLinejoin="round" 
      />
    </svg>
  )
}