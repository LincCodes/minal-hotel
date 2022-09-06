<script>
    import { user } from './sessionStore'
    import { supabase } from './supabaseClient'
  
    // @ts-ignore
    user.set(supabase.auth.user())
  
    supabase.auth.onAuthStateChange((_, session) => {
      // @ts-ignore
      user.set(session.user)
    })
  </script>

<slot></slot>