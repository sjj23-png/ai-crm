export interface StorageProvider {
  get<T>(key: string): T | null;

  set<T>(key: string, value: T): void;

  remove(key: string): void;

  clear(): void;

  has(key: string): boolean;

  getAccessToken(): string | null;

  setAccessToken(token: string): void;

  removeAccessToken(): void;

  getRefreshToken(): string | null;

  setRefreshToken(token: string): void;

  removeRefreshToken(): void;
}