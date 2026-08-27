import LoginForm from "@/components/auth/LoginForm";
import { AuthThemeCurtain } from "@/components/auth/AuthThemeCurtain";

export default function LoginPage() {
  return <AuthThemeCurtain renderForm={() => <LoginForm />} />;
}