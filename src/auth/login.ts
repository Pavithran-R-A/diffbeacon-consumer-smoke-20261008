export interface Session {
  user: string;
  token: string;
  issuedAt: number;
}

export function login(user: string, token: string): Session | null {
  if (user.length === 0 || token.length === 0) {
    return null;
  }
  return { user, token, issuedAt: Date.now() };
}

export function renew(session: Session, token: string): Session {
  return { ...session, token, issuedAt: Date.now() };
}
