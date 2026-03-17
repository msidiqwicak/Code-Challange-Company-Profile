import { supabase } from "./supabaseClient";

export const loginAdmin = async (email: string, password: string) => {
  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (authError) throw new Error(authError.message);

  const { data: adminData, error: adminError } = await supabase
    .from("admins")
    .select("*")
    .eq("id", authData.user.id)
    .single();

  if (adminError) throw new Error("Admin profile not found in database");

  return adminData;
};

export const logoutAdmin = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};
