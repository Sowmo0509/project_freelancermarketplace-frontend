import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Card container element for composing a card layout.
 *
 * Renders a div with base card styling and forwards any additional div props.
 *
 * @param className - Optional additional class names appended to the component's base styles
 * @param props - Remaining div props are passed through to the rendered element
 * @returns The card container element with base styling and forwarded props
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Header region for a Card component that provides a responsive grid layout and slot-based hooks for actions.
 *
 * @param className - Additional class names to merge with the component's base header classes
 * @returns The header div element with `data-slot="card-header"` and the composed class names
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a title area for a Card with base typography and an extensible className.
 *
 * @returns A `div` element with `data-slot="card-title"`, `leading-none font-semibold` styles, and any provided props forwarded to the element.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's description area with muted, small typography.
 *
 * @returns A div element used as the card description slot, styled with muted small text and accepting/forwarding standard div props.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's action region used to host interactive controls such as buttons or links.
 *
 * @param className - Additional classes to merge with the component's base layout classes
 * @returns The rendered div element for the card action slot
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card's main content container.
 *
 * @returns A div element serving as the card content area with horizontal padding and any provided `className` merged into its classes. 
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Footer area for the card layout.
 *
 * Renders a div with data-slot="card-footer", alignment and padding classes, and forwards all received div props.
 *
 * @returns The rendered footer div element.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}