import { createClient } from "@/utils/supabase/client";

/**
 * Signs in a user with the provided email and password.
 *
 * Creates a Supabase client and attempts to authenticate the user using the given credentials.
 * If the authentication fails, an error with the corresponding message is thrown.
 * On success, the function alerts the user with a success message and logs the sign-in data.
 *
 * @param email - The user's email address.
 * @param password - The user's password.
 *
 * @throws {Error} If the sign-in attempt fails.
 */
export async function signInWithPassWord(email: string, password: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    throw new Error(error.message);
  } else {
    alert("로그인 성공");
    console.log("로그인 data", data);
  }
}
