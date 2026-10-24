import { playfairDisplay } from "@/lib/fonts";
import { cn } from "@/lib/utils";

function SectionHeading({
  className,
  ...props
}) {
  return (
    <div className={cn(className)} {...props} />
  )
}

function SectionHeadingTitle({
  className,
  ...props
}) {
  return (
    <h2 className={cn(playfairDisplay.className, "text-4xl text-primary", className)} {...props} />
  )
}

function SectionHeadingSubtitle({
  className,
  ...props
}) {
  return (
    <span className={cn("block mb-3 text-sm uppercase tracking-wider text-secondary font-bold", className)} {...props} />
  )
}

export { SectionHeading, SectionHeadingTitle, SectionHeadingSubtitle }