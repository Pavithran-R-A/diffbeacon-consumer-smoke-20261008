import { login, renew, type Session } from "../auth/login";

export function handle(event: { id: string; user?: string; token?: string }): string {
  if (event.user === undefined || event.token === undefined) {
    return event.id;
  }
  const session: Session | null = login(event.user, event.token);
  if (session === null) {
    return `${event.id}:unauthenticated`;
  }
  return `${event.id}:${renew(session, event.token).issuedAt}`;
}
