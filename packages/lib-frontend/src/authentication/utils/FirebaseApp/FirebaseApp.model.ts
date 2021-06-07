export interface FirebaseAppClass {
  initialize: () => any;
  signIn: (token: string) => any;
  signOut: () => any;
}
