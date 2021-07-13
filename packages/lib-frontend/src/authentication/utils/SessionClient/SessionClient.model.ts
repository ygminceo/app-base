export interface SessionClientModel {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  getToken: () => Promise<string | null>;
}
