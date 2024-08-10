export interface ButtonProps {
  children: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="flex items-center gap-2">
      {children}
    </button>
  )
}
