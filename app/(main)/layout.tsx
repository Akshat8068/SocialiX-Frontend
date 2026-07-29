"use client"
import ProtectedRoute from "@/components/common/ProtectedRoutes";
import AuthProvider from "./authProvider";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <ProtectedRoute>
                <Navigation/>
                <Header/>
                {children}
            </ProtectedRoute>
            
        </AuthProvider>
    );
}