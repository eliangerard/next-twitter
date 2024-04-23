import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from '@/app/components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostLists } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, username)')
    .order('created_at', { ascending: false })

  const { data: { user } } = await supabase.auth.getUser()
  const posts =
    data?.map(post => ({
      ...post,
      user: Array.isArray(post.user) ? post.user[0] : post.user
    })) ?? []

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-stone-900">

        <header className='w-full fixed top-0 left-0 h-12 flex items-center justify-center border-b-[1px] border-white/20 bg-stone-800 z-50'>
          <div className='w-full max-w-[600px] flex items-center justify-between px-3'>
            <div className='w-6 h-10'></div>
            <h1 className='font-black'>Not X</h1>
            <AuthButtonServer />
          </div>
        </header>
        <section className="max-w-[600px] w-full min-h-screen pt-16">
          <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
          <PostLists posts={posts} />
        </section>
        <section className='max-w-[200px]'>
          {/* <div>
            {JSON.stringify(user)}
          </div> */}
        </section>
      </main>
    </>
  )
}
