export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  name?: string;
  bio?: String;

  socialLinks?: {
    fb?: String;
    instagram?: String;
    twitter?: String;
    linkedIn?: String;
  };
}

export interface Role {
  canPublish: boolean,
  isAdmin: boolean
}