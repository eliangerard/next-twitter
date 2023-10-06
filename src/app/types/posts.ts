import { Database } from "./database";

type Posts = Database['public']['Tables']['posts']['Row'];
type User = Database['public']['Tables']['users']['Row'];

export type Post = Posts & {
    user: User;
};