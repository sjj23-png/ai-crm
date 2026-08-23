import { useState } from "react";

import {
  RiEyeLine,
  RiEyeOffLine,
} from "@remixicon/react";

import { Input } from "../Input";

import type { PasswordInputProps } from "./PasswordInput.types";

import { toggleButtonClasses } from "./PasswordInput.styles";

export function PasswordInput({
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <Input
      {...props}
      type={
        showPassword
          ? "text"
          : "password"
      }
      rightIcon={
        <button
          type="button"
          className={toggleButtonClasses}
          onClick={() =>
            setShowPassword(
              (prev) => !prev
            )
          }
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
        >
          {showPassword ? (
            <RiEyeOffLine size={18} />
          ) : (
            <RiEyeLine size={18} />
          )}
        </button>
      }
    />
  );
}