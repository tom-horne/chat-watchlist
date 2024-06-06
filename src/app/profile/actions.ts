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

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    username: formData.username,
    firstname: formData.firstname,
    lastname: formData.lastname,

  }

  console.log('====================================');
  console.log("DATAATAA", data);
  console.log('====================================');

  const { error } = await supabase
      .from("profiles")
      .update([
        {
          username: data.username,
          firstname: data.firstname,
          lastname: data.lastname,
        },
      ])
      .eq("id", "664f8571-961c-4233-b6db-57acb8895b36")
      .select();

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/profile')
}