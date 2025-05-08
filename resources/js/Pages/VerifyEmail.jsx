import React from 'react';
import { useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const resend = () => {
        post('/email/verification-notification');
    };

    return (
        <div className="max-w-md mx-auto mt-10 text-center">
            <h1 className="text-xl font-bold">Verify Your Email</h1>
            <p className="mt-2">A verification link has been sent to your email address.</p>

            {status === 'verification-link-sent' && (
                <div className="mt-4 text-green-600">
                    A new verification link has been sent!
                </div>
            )}

            <button
                onClick={resend}
                disabled={processing}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
                Resend Verification Email
            </button>
        </div>
    );
}
