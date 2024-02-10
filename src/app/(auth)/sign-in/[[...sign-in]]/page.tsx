import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center space-y-8 items-center flex flex-col justify-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Sign in</h1>

                <p className="mt-4 text-gray-500">
                    Access your Discord webhooks & applications
                </p>
                <SignIn />
            </div>
        </div>
    )
}