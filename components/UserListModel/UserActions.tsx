"use client";

import { MessageCircle } from "lucide-react";
import { FollowUser } from "./UserListModel";
import { Button } from "../ui/button";

interface FollowActionsProps {
    user: FollowUser;

    onFollow?: (id: number) => void;
    onUnfollow?: (id: number) => void;
    onMessage?: (id: number) => void;
}

export default function UserActions({
    user,
    onFollow,
    onUnfollow,
    onMessage,
}: FollowActionsProps) {
    const isFollowing = user.isFollowing ?? false;
    const requested = user.requested ?? false;
    if (requested) {
        return (
            
            <Button onClick={() => {
                    if (user.requestId) {
                        onUnfollow?.(user.requestId);
                    }
                }}>
                Cancel Request</Button>
        );
    }

    if (isFollowing) {
        return (
            
            <Button onClick={() => onUnfollow?.(user.id)}>Folllowing</Button>
        );
    }

    return (
        
        <Button onClick={() => onFollow?.(user.id)}>Folllow</Button>
    );
}