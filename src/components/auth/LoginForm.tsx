import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link, useNavigate } from "react-router-dom";

import authConfig from "@/config/auth.config";


import { useLogin } from "@/features/auth/hooks";

import {
  loginSchema,
  type LoginFormData,
} from "@/features/auth/validations/login.schema";

import { Button } from "@/design-system/components/buttons/Button";

import { Input } from "@/design-system/components/base/Input";

import { PasswordInput } from "@/design-system/components/base/PasswordInput/PasswordInput";

import { Checkbox } from "@/design-system/components/base/Checkbox";

import { Alert } from "@/design-system/components/feedback";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/design-system/components/data-display/Card";

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",

      password: "",

      rememberMe: false,
    },
  });

  async function onSubmit(
    values: LoginFormData,
  ) {
    try {
      setErrorMsg(null);
      await login.mutateAsync(values);

      navigate(
        authConfig.dashboardRoute,
        {
          replace: true,
        },
      );
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Invalid credentials or network connection issue.";
      setErrorMsg(errMsg);
    }
  }

  return (
    <div className="w-full">

      <div className="text-center pb-4">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Welcome Back
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Sign in to your AI CRM account to manage client pipelines.
        </p>
      </div>

      <div className="space-y-6 pt-2">
        {errorMsg && (
          <Alert variant="error" className="mb-4" closable onClose={() => setErrorMsg(null)}>
            {errorMsg}
          </Alert>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label="Email Address"
            type="email"
            size="lg"
            placeholder="owner@testcrm.com"
            autoComplete="email"
            error={errors.email?.message as string | undefined}
            {...register("email")}
          />

          <PasswordInput
            label="Password"
            autoComplete="current-password"
            placeholder="••••••••"
            error={errors.password?.message as string | undefined}
            {...register("password")}
          />

          <div className="flex items-center justify-between text-sm">
            <Checkbox
              label="Remember me"
              {...register("rememberMe")}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={login.isPending}
            fullWidth
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all py-3 rounded-xl hover:scale-[1.01] active:scale-[0.99]"
          >
            Sign In
          </Button>
        </form>

        <div className="pt-2 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-purple-600 dark:text-purple-400 hover:underline transition-colors ml-1"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}