import type { StorageProvider } from "./storage.types";
import storage from "@/constants/storage";

class BrowserStorageService implements StorageProvider {
  get<T>(key: string): T | null {
    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    this.remove(storage.accessToken);
    this.remove(storage.refreshToken);
    this.remove(storage.user);
    this.remove(storage.permissions);
  }

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }








  getAccessToken(): string | null {
    return this.get<string>(storage.accessToken);
  }

  setAccessToken(token: string): void {
    this.set(storage.accessToken, token);
  }

  removeAccessToken(): void {
    this.remove(storage.accessToken);
  }

  getRefreshToken(): string | null {
    return this.get<string>(storage.refreshToken);
  }

  setRefreshToken(token: string): void {
    this.set(storage.refreshToken, token);
  }

  removeRefreshToken(): void {
    this.remove(storage.refreshToken);
  }
}

const storageService = new BrowserStorageService();

export default storageService;