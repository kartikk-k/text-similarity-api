import { FC, HTMLAttributes, forwardRef } from "react"
import { cva } from 'class-variance-authority'
import { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// variants for the component
const headingVariants = cva("mb-2 text-center max-w-prose text-black dark:white lg:text-left font-extrabold  leading-tight tracking-tighter", {
    variants: {
        size: {
            default: 'text-4xl md:text-5xl lg:text-6xl',
            lg: 'text-5xl md:text-6xl lg:text-7xl',
            sm: 'text-2xl md:text-3xl lg:text-4xl',
        }
    },
    defaultVariants: {
        size: "default"
    }
})

// component props
interface LargeHeadingProps
    extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof headingVariants> { }

// main component
const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({
    className, size, children, ...props
}, ref) => {
    return <h1 ref={ref} {...props} className={cn(headingVariants({
        size, className
    }))}>{children}</h1>
})

// for debugging
LargeHeading.displayName = "LargeHeading"

export default LargeHeading;