import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      name: string | null;
      email: string;
      image: string | null;
      id: string;
    };
  }
}
