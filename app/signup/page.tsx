
'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Button from '@/components/ui/button/Button';
import TextInput from '@/components/ui/input/Input';

const SignupPage = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Demo only: registration is not connected to a backend.
        router.push('/dashboard');
    };

    return (
        <div className=" login-container w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold text-indigo-600">
                    JOIN TALENTHUB
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    Create your account
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                    Build your profile and discover your next career opportunity.
                </p>
            </div>

            {/* Registration form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <TextInput
                    id="name"
                    name="name"
                    type="text"
                    label="Full name"
                    value={name}
                    onChange={setName}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                />

                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={setEmail}
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                />

                <TextInput
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    autoComplete="new-password"
                    placeholder="Create a password (8+ characters)"
                    required
                />

                <TextInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    label="Confirm password"
                    // className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    required
                />

                {error && (
                    <p
                        role="alert"
                        className="text-sm text-red-600"
                    >
                        {error}
                    </p>
                )}

                <Button
                    label="Create account"
                    variant="primary"
                    size="md"
                    type="submit"
                    className="w-full"
                />
            </form>

            {/* Divider */}
            <div className="my-6 border-t border-slate-200" />

            {/* Login link */}
            <p className="text-center text-sm text-slate-600">
                Already have an account?{' '}
                <Link
                    href="/login"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    Sign in
                </Link>
            </p>

            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
                By creating an account, you agree to use TalentHub in accordance
                with its terms and privacy policy.
            </p>
        </div>
    );
}
export default SignupPage;