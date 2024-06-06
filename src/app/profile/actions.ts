'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/server'

type FormData = {
  username: string,
  firstname: string,
  lastname: string
}

export async function profileData(formData: FormData) {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser();


  // type-casting here for convenience
  // in practice, you should validate your inputs
  const userData = {
    username: formData.username,
    firstname: formData.firstname,
    lastname: formData.lastname,

  }

  const { error } = await supabase
      .from("profiles")
      .update([
        {
          username: userData.username,
          firstname: userData.firstname,
          lastname: userData.lastname,
        },
      ])
      .eq("id", data.user?.id)
      .select();

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/profile')
}