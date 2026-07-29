"use client"
import ProtectedRoute from "@/components/common/ProtectedRoutes";
import AuthProvider from "./authProvider";
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <ProtectedRoute>
                {children}
            </ProtectedRoute>
            
        </AuthProvider>
    );
}