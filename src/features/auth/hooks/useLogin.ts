import { useMutation } from "@tanstack/react-query";


import authService from "../services";

import type {
  LoginRequest,
} from "../types/auth.types";

export function useLogin() {
  return useMutation({
    mutationFn: (
      payload: LoginRequest,
    ) => authService.login(payload),
  });
}