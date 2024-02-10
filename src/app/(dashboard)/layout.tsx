import Navbar from "@/components/layout/Navbar";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen relative">
            <Toaster position="top-right" />
            <Suspense fallback={<Loading />}>
                <Navbar />
            </Suspense>
            <div className="static flex items-center justify-center h-full w-full px-12 py-14 md:py-20">
                <Suspense fallback={<Loading size={500} />}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}