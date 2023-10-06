'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton() {
    const formStatus = useFormStatus()
    console.log(formStatus);
    
    const { pending } = formStatus;
    console.log(pending);

    return (
        <button
            disabled={pending}
            type='submit'
            className='bg-sky-500 text-sm disabled:opacity-40 disabled:pointer-events-none font-bold rounded-full px-5 py-2 self-end'
        >
            {pending ? 'Posteando...' : 'Posteare'}
        </button>
    )
}