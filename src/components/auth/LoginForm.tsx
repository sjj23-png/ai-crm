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
    <Card className="w-full max-w-md border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl shadow-purple-900/5 dark:shadow-purple-950/20 rounded-2xl p-2 transition-all">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          Welcome Back
        </CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Sign in to your AI CRM account to manage client pipelines.
        </p>
      </CardHeader>

      <CardContent className="space-y-6 pt-4">
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
            className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700 focus:border-purple-600 dark:focus:border-purple-500 transition-colors"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email")}
          />

          <PasswordInput
            label="Password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700 focus:border-purple-600 dark:focus:border-purple-500 transition-colors"
            error={
              errors.password?.message
            }
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
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all py-3 rounded-xl"
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
      </CardContent>
    </Card>
  );
}