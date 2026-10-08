export function login(user: string, token: string): boolean {
  return user.length > 0 && token.length > 0;
}
