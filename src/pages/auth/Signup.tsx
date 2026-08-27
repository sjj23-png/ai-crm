import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { apiClient } from "@/services/api";
import api from "@/constants/api";

import {
  RegisterSchema,
  type RegisterDto,
} from "@/features/auth/validations/register.schema";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/design-system/components/data-display/Card";

import { Input } from "@/design-system/components/base/Input";
import { PasswordInput } from "@/design-system/components/base/PasswordInput/PasswordInput";
import { Checkbox } from "@/design-system/components/base/Checkbox";
import { Button } from "@/design-system/components/buttons/Button";

import { AuthBackground } from "@/components/auth/AuthBackground";
import { AuthCard } from "@/components/auth/AuthCard";
import { DraggableOrb } from "@/components/auth/DraggableOrb";

export default function RegisterPage() {

  const navigate = useNavigate();

  const [logo, setLogo] = useState<File>();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      code: "",
      email: "",
      phone: "",
      website: "",
      ownerName: "",
      ownerEmail: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  async function onSubmit(values: RegisterDto) {

    try {

      setServerError("");

      const formData = new FormData();

      formData.append("name", values.name);

      if (values.code)
        formData.append("code", values.code);

      formData.append("email", values.email);

      if (values.phone)
        formData.append("phone", values.phone);

      if (values.website)
        formData.append("website", values.website);

      formData.append("ownerName", values.ownerName);

      formData.append("ownerEmail", values.ownerEmail);

      formData.append("password", values.password);

      formData.append(
        "confirmPassword",
        values.confirmPassword,
      );

      if (logo)
        formData.append("logo", logo);

      await apiClient.post(
        api.auth.register,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        },
      );

      navigate("/login");

    } catch (error: any) {

      setServerError(
        error?.response?.data?.message ??
        "Registration failed",
      );
    }
  }

  return (
    <AuthBackground>
      <DraggableOrb />
      <AuthCard className="max-w-2xl">
        <div className="text-center pb-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Create Your Organization
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Register your company workspace and owner account to get started.
          </p>
        </div>

        <div className="space-y-6 pt-2">
          {serverError && (
            <div className="mb-5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-3 text-sm text-red-600 dark:text-red-400">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >

            {/* Organization Info */}
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-5">

              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Organization Details
              </h2>

              <Input
                label="Organization Name"
                placeholder="Acme Corp"
                required
                error={errors.name?.message as string | undefined}
                {...register("name")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  label="Org Code (Optional)"
                  placeholder="ACME"
                  error={errors.code?.message as string | undefined}
                  {...register("code")}
                />

                <Input
                  label="Organization Email"
                  placeholder="contact@acme.com"
                  required
                  error={errors.email?.message as string | undefined}
                  {...register("email")}
                />

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <Input
                  label="Phone (Optional)"
                  placeholder="+1234567890"
                  error={errors.phone?.message as string | undefined}
                  {...register("phone")}
                />

                <Input
                  label="Website (Optional)"
                  placeholder="https://acme.com"
                  error={errors.website?.message as string | undefined}
                  {...register("website")}
                />

              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Company Logo (Optional)
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setLogo(e.target.files?.[0])
                  }
                  className="w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-50 dark:file:bg-purple-950/60 file:text-purple-700 dark:file:text-purple-300 hover:file:bg-purple-100 transition-all cursor-pointer"
                />
              </div>

            </div>

            {/* Owner Info */}
            <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-5">

              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Owner Account Details
              </h2>

              <Input
                label="Owner Full Name"
                placeholder="John Doe"
                required
                error={errors.ownerName?.message as string | undefined}
                {...register("ownerName")}
              />

              <Input
                label="Owner Email Address"
                placeholder="john@acme.com"
                required
                error={errors.ownerEmail?.message as string | undefined}
                {...register("ownerEmail")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <PasswordInput
                  label="Password"
                  placeholder="••••••••"
                  required
                  error={errors.password?.message as string | undefined}
                  {...register("password")}
                />

                <PasswordInput
                  label="Confirm Password"
                  placeholder="••••••••"
                  required
                  error={
                    errors.confirmPassword?.message as string | undefined
                  }
                  {...register("confirmPassword")}
                />

              </div>

            </div>

            <Checkbox
              label="I agree to the Terms & Privacy Policy"
              {...register("terms")}
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-purple-500/25 transition-all py-3 rounded-xl mt-4"
            >
              Create Organization
            </Button>

          </form>

          <div className="pt-2 text-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-purple-600 dark:text-purple-400 hover:underline transition-colors ml-1"
            >
              Sign In
            </Link>
          </div>

        </div>
      </AuthCard>
    </AuthBackground>
  );
}