"use client"; 

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Home, Newspaper, MessageCircle, Bell } from "lucide-react";
import Link from "next/link";
import MessagesButton from "./MessagesButton";
import NotificationsButton from "./NotificationsButton";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
  const user = { id: 'mock-user-id' };

  // Static values for demo purposes
  const unreadNotificationsCount = 5;
  const unreadMessagesCount = 10;

  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (section: string) => {
    setSelected(section);
  };

  return (
    <div className={className}>
      <Button
        variant="ghost"
        className={`flex items-center justify-start gap-3 ${selected === 'home' ? 'text-yellow-500' : ''}`}
        title="Home"
        asChild
        onClick={() => handleSelect('home')}
      >
        <Link href="/">
          <Home className={`h-5 w-5 ${selected === 'home' ? 'text-yellow-500' : ''}`} />
          <span className={`hidden lg:inline ${selected === 'home' ? 'text-yellow-500' : ''}`}>Home</span>
        </Link>
      </Button>

      <Button
        variant="ghost"
        className={`flex items-center justify-start gap-3 ${selected === 'news' ? 'text-yellow-500' : ''}`}
        title="News"
        asChild
        onClick={() => handleSelect('news')}
      >
        <Link href="/news">
          <Newspaper className={`h-5 w-5 ${selected === 'news' ? 'text-yellow-500' : ''}`} />
          <span className={`hidden lg:inline ${selected === 'news' ? 'text-yellow-500' : ''}`}>News</span>
        </Link>
      </Button>

      <Button
        variant="ghost"
        className={`flex items-center justify-start gap-3 ${selected === 'messages' ? 'text-yellow-500' : ''}`}
        title="Messages"
        asChild
        onClick={() => handleSelect('messages')}
      >
        <Link href="/messages">
          <MessageCircle className={`h-5 w-5 ${selected === 'messages' ? 'text-yellow-500' : ''}`} />
          <span className={`hidden lg:inline ${selected === 'messages' ? 'text-yellow-500' : ''}`}>Messages</span>
        </Link>
      </Button>

      <NotificationsButton
        initialState={{ unreadCount: unreadNotificationsCount }}
        onClick={() => handleSelect('notifications')}
        className={`flex items-center justify-start gap-3 ${selected === 'notifications' ? 'text-yellow-500' : ''}`}
      >
        <Bell className={`h-5 w-5 ${selected === 'notifications' ? 'text-yellow-500' : ''}`} />
        <span className={`hidden lg:inline ${selected === 'notifications' ? 'text-yellow-500' : ''}`}>Notifications</span>
      </NotificationsButton>

      <Button
        variant="ghost"
        className={`flex items-center justify-start gap-3 ${selected === 'bookmarks' ? 'text-yellow-500' : ''}`}
        title="Bookmarks"
        asChild
        onClick={() => handleSelect('bookmarks')}
      >
        <Link href="/bookmarks">
          <Bookmark className={`h-5 w-5 ${selected === 'bookmarks' ? 'text-yellow-500' : ''}`} />
          <span className={`hidden lg:inline ${selected === 'bookmarks' ? 'text-yellow-500' : ''}`}>Bookmarks</span>
        </Link>
      </Button>
    </div>
  );
}

