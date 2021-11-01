export interface AuthResponse {
  ok: boolean;
  uid?: String;
  name?: String;
  token?: string;
  msg?: String;
  email?: String;
}

export interface Usuario {
  uid: String;
  name: String;
  email: String;
}
