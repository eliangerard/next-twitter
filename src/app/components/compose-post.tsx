'use client'

import { ComposePostButton } from './compose-post-button'
import { addPost } from '../actions/add-post-action'
import { useRef } from 'react'

export function ComposePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
        <form ref={formRef} action={async (formData) => {
          await addPost(formData)
          formRef.current?.reset()
        }} className='flex flex-row p-3'>
            <img className='rounded-full w-10 h-10 object-contain mr-4' src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <textarea
                    name='content'
                    rows={4}
                    className='w-full bg-stone-800 placeholder-zinc-400 p-2 rounded-xl resize-none focus:outline-none focus:ring-[1px] focus:ring-white/30 transition'
                    placeholder='Post something!'
                ></textarea>
                <ComposePostButton />
            </div>
        </form>
  )
}
