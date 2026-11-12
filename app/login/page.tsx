
'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import TextInput from '@/components/ui/input/Input';
import Button from '@/components/ui/button/Button';

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (!email.trim() || !password) {
            setError('Please enter your email address and password.');
            return;
        }

        setIsSubmitting(true);

        // Demo redirect only; authentication is not connected.
        router.push('/dashboard');
    };

    return (
        <div className=" login-container w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold text-indigo-600">
                    WELCOME BACK
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    Sign in to TalentHub
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                    Access your candidate profile and continue your career journey.
                </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <TextInput
                    id="email"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(value) => {
                        setEmail(value);
                        setError('');
                    }}
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
                />

                {/* Password */}
                <div>
                    <div className="mb-2 flex items-center justify-between gap-3">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <Button
                            label="Forgot password?"
                            variant="ghost"
                            size="sm"
                            type="button"
                            disabled
                            title="Password reset will be implemented later"
                        />
                    </div>

                    <div className="relative">
                        <TextInput
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(value) => {
                                setPassword(value);
                                setError('');
                            }}
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            required
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <Button
                            label={showPassword ? 'Hide' : 'Show'}
                            variant="ghost"
                            size="sm"
                            type="button"
                            onClick={() =>
                                setShowPassword((previous) => !previous)
                            }
                            aria-label={
                                showPassword ? 'Hide password' : 'Show password'
                            }
                            aria-pressed={showPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                {/* Validation error */}
                {error && (
                    <p
                        role="alert"
                        className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                    >
                        {error}
                    </p>
                )}

                {/* Submit button */}
                <Button
                    label={isSubmitting ? 'Signing in...' : 'Sign in'}
                    variant="primary"
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                />
            </form>

            <div className="my-6 border-t border-slate-200" />

            {/* Register link */}
            <p className="text-center text-sm text-slate-600">
                Don&apos;t have an account?{' '}
                <Link
                    href="/signup"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                    Create an account
                </Link>
            </p>

            {/* Footer */}
            <p className="mt-6 text-center text-xs leading-5 text-slate-500">
                Sign-in is currently a UI prototype. Authentication will be
                connected when we implement the backend.
            </p>
        </div>
    );
}
