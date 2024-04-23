'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton () {
  const formStatus = useFormStatus()
  console.log(formStatus)

  const { pending } = formStatus
  console.log(pending)

  return (
        <button
            disabled={pending}
            type='submit'
            className='bg-teal-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-4 py-1 self-end'
        >
            {pending ? 'Posting...' : 'Post'}
        </button>
  )
}
