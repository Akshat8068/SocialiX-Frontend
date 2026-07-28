"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Camera,
  Edit,
  Link2,
  Share2,
  LayoutDashboard,
} from "lucide-react";

export default function ProfileHeader() {
  return (
    <section>
      {/* Desktop Cover */}
      <div className="relative hidden h-64 overflow-hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="relative flex flex-col gap-6 py-6 lg:-mt-20">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Avatar + Info */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end">
              {/* Avatar */}
              <div className="relative w-fit">
                <div className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-1">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-white lg:h-40 lg:w-40">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <button className="absolute bottom-1 right-1 rounded-full bg-orange-500 p-2 text-white shadow-lg transition hover:bg-orange-600">
                  <Camera size={18} />
                </button>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-3xl font-bold">Alex Rivera</h1>

                  <BadgeCheck
                    size={22}
                    className="fill-sky-500 text-sky-500"
                  />

                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold uppercase text-orange-600">
                    Pro
                  </span>
                </div>

                <p className="text-gray-500">@arivera_creative</p>

                <p className="max-w-2xl leading-7 text-gray-700">
                  Digital Product Designer & Tech Enthusiast. Building the
                  future of social connectivity. Exploring the intersection of
                  human psychology and modern UI systems.
                </p>

                <a
                  href="#"
                  className="flex items-center gap-2 text-orange-500 hover:underline"
                >
                  <Link2 size={16} />
                  socialix.app/alex
                </a>

                {/* Stats */}
                <div className="flex gap-8 pt-2">
                  <div>
                    <p className="text-xl font-bold">124</p>
                    <span className="text-sm text-gray-500">Posts</span>
                  </div>

                  <div>
                    <p className="text-xl font-bold">8.2K</p>
                    <span className="text-sm text-gray-500">Followers</span>
                  </div>

                  <div>
                    <p className="text-xl font-bold">428</p>
                    <span className="text-sm text-gray-500">Following</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600">
                <Edit size={18} />
                Edit Profile
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-medium transition hover:bg-gray-100">
                <Share2 size={18} />
                Share Profile
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-900">
                <LayoutDashboard size={18} />
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}