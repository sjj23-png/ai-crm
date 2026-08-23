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
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 overflow-hidden transition-colors">
      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <Card className="relative z-10 w-full max-w-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-xl shadow-purple-900/5 dark:shadow-purple-950/20 rounded-2xl p-4 transition-all">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            Create Your Organization
          </CardTitle>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Register your company workspace and owner account to get started.
          </p>
        </CardHeader>

        <CardContent className="space-y-6 pt-2">
          {serverError && (
            <div className="mb-5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 p-3 text-sm text-red-600 dark:text-red-400">
              {serverError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Organization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Organization Name"
                placeholder="Acme Corp"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("name")}
                error={errors.name?.message}
              />

              <Input
                label="Organization Code"
                placeholder="ACME"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("code")}
                error={errors.code?.message}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Organization Email"
                placeholder="contact@acme.com"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                type="email"
                {...register("email")}
                error={errors.email?.message}
              />

              <Input
                label="Phone Number"
                placeholder="+91 9876543210"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("phone")}
                error={errors.phone?.message}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Website"
                placeholder="https://acme.com"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("website")}
                error={errors.website?.message}
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Company Logo
                </label>
                <input
                  type="file"
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 dark:file:bg-purple-950/60 dark:file:text-purple-300 cursor-pointer"
                  accept="image/png,image/jpeg,image/webp,image/svg+xml"
                  onChange={(e) =>
                    setLogo(e.target.files?.[0])
                  }
                />
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800 my-2" />

            {/* Owner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Owner Name"
                placeholder="John Doe"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("ownerName")}
                error={errors.ownerName?.message}
              />

              <Input
                label="Owner Email"
                placeholder="john@acme.com"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                type="email"
                {...register("ownerEmail")}
                error={errors.ownerEmail?.message}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PasswordInput
                label="Password"
                placeholder="••••••••"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("password")}
                error={errors.password?.message}
              />

              <PasswordInput
                label="Confirm Password"
                placeholder="••••••••"
                className="bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-700"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
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

        </CardContent>

      </Card>

    </div>
  );
}