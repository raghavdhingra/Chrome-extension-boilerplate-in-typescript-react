export interface UserType {
  alias: string;
  createdAt: string;
  firstname: string;
  lastname: string;
  updatedAt: string;
  is_email_verified?: boolean;
  email?: string;
  is_enabled?: boolean;
}
