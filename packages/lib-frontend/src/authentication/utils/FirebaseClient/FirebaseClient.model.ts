export interface FirebaseClientModel {
  initialize: () => any;
  signIn: (token: string) => any;
  signOut: () => any;
}
