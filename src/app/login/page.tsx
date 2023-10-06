import { AuthButton } from "../components/auth-button";

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


export default function Login () {
    return (
        <section className="grid place-content-center min-h-screen">
            <h1 className="text-xl font-bold mb-4">Inicia sesión en Nexter</h1>
            <AuthButton/>
        </section>
    )
}