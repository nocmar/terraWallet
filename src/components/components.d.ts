/* Buttons */
interface ButtonProps {
    /** xs: 22px; sm: 26px; md: 36px; lg: 50px */
    size?: "xs" | "sm" | "md" | "lg"
    color?: string
    outline?: boolean
    block?: boolean
  
    loading?: boolean
    submit?: boolean
  
    disabled?: boolean
    className?: string
    children?: ReactNode
  }
  
  type ButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement>
  type Button = ButtonProps & ButtonAttrs