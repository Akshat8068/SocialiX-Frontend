"use client"
import ProtectedRoute from "@/components/common/ProtectedRoutes";
import AuthProvider from "./authProvider";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import { useEffect } from "react";
import { socket } from "@/features/chat/services/socket";
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, [])
    return (
        <AuthProvider>
            <ProtectedRoute>
                <Navigation />
                <Header />
                {children}
            </ProtectedRoute>

        </AuthProvider>
    );
}