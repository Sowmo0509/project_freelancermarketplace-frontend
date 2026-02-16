"use client"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import {
  useState,
  createContext,
  useContext,
  type ComponentProps,
  type ReactNode,
  type ChangeEvent,
  useEffect,
  useDeferredValue,
  useMemo,
} from "react"
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

const PasswordInputContext = createContext<{ password: string } | null>(null)

/**
 * A password input with a toggle to show or hide the value and a context that exposes the current password.
 *
 * The component renders an input with an inline button to switch between "password" and "text", and provides
 * the current input string via PasswordInputContext for consumers such as strength checkers.
 *
 * @param children - Optional nodes rendered below the input group (e.g., helper UI or strength checker).
 * @param onChange - Change handler forwarded to the underlying input; invoked for both controlled and uncontrolled usage.
 * @param value - If provided, the component is controlled and this value is used as the input content.
 * @param defaultValue - Initial value used when the component is uncontrolled.
 * @returns The PasswordInput React element.
 */
export function PasswordInput({
  children,
  onChange,
  value,
  defaultValue,
  ...props
}: Omit<ComponentProps<typeof Input>, "type"> & {
  children?: ReactNode
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState(defaultValue ?? "")

  const Icon = showPassword ? EyeOffIcon : EyeIcon
  const currentValue = value ?? password

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    onChange?.(e)
  }

  return (
    <PasswordInputContext value={{ password: currentValue.toString() }}>
      <div className="space-y-3">
        <InputGroup>
          <InputGroupInput
            {...props}
            value={value}
            defaultValue={defaultValue}
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              onClick={() => setShowPassword(p => !p)}
            >
              <Icon className="size-4.5" />
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        {children}
      </div>
    </PasswordInputContext>
  )
}

/**
 * Renders a password strength meter and descriptive label for the current PasswordInput value.
 *
 * The component computes a strength score (0–4) for the password obtained from PasswordInputContext,
 * dynamically loads zxcvbn language assets for evaluation, and displays a four-segment progress bar
 * plus a right-aligned label. If zxcvbn provides a warning, the label is shown with a tooltip containing that warning.
 *
 * @returns A React element containing the strength bar and label, or `null` if loading the strength-checker assets fails.
 */
export function PasswordInputStrengthChecker() {
  const [optionsLoaded, setOptionsLoaded] = useState(false)
  const [errorLoadingOptions, setErrorLoadingOptions] = useState(false)

  const { password } = usePasswordInput()
  const deferredPassword = useDeferredValue(password)
  const strengthResult = useMemo(() => {
    if (!optionsLoaded || deferredPassword.length === 0) {
      return { score: 0, feedback: { warning: undefined } } as const
    }

    return zxcvbn(deferredPassword)
  }, [optionsLoaded, deferredPassword])

  useEffect(() => {
    Promise.all([
      import("@zxcvbn-ts/language-common"),
      import("@zxcvbn-ts/language-en"),
    ])
      .then(([common, english]) => {
        zxcvbnOptions.setOptions({
          translations: english.translations,
          graphs: common.adjacencyGraphs,
          maxLength: 50,
          dictionary: {
            ...common.dictionary,
            ...english.dictionary,
          },
        })
        setOptionsLoaded(true)
      })
      .catch(() => setErrorLoadingOptions(true))
  }, [])

  function getLabel() {
    if (deferredPassword.length === 0) return "Password strength"
    if (!optionsLoaded) return "Loading strength checker"

    const score = strengthResult.score
    switch (score) {
      case 0:
      case 1:
        return "Very weak"
      case 2:
        return "Weak"
      case 3:
        return "Strong"
      case 4:
        return "Very strong"
      default:
        throw new Error(`Invalid score: ${score satisfies never}`)
    }
  }

  const label = getLabel()

  if (errorLoadingOptions) return null

  return (
    <div className="space-y-0.5">
      <div
        role="progressbar"
        aria-label="Password Strength"
        aria-valuenow={strengthResult.score}
        aria-valuemin={0}
        aria-valuemax={4}
        aria-valuetext={label}
        className="flex gap-1"
      >
        {Array.from({ length: 4 }).map((_, i) => {
          const color =
            strengthResult.score >= 3 ? "bg-primary" : "bg-destructive"

          return (
            <div
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full",
                strengthResult.score > i ? color : "bg-secondary",
              )}
            />
          )
        })}
      </div>
      <div className="flex justify-end text-sm text-muted-foreground">
        {strengthResult.feedback.warning == null ? (
          label
        ) : (
          <Tooltip>
            <TooltipTrigger className="underline underline-offset-1">
              {label}
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={4} className="text-base">
              {strengthResult.feedback.warning}
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </div>
  )
}

const usePasswordInput = () => {
  const context = useContext(PasswordInputContext)
  if (context == null) {
    throw new Error(
      "usePasswordInput must be used within a PasswordInputContext",
    )
  }
  return context
}