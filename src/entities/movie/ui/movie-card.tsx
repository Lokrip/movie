"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/kit/card";
import { MovieCardProps } from "../model/types";
import Link from "next/link";
import { pages } from "@/shared/consts/pages";
import { AppImage } from "@/shared/ui/kit/app-image";

export function MovieCard({ movie }: MovieCardProps) {
  const { id, overview, poster_path, release_date, title } = movie;

  return (
    <Card className="w-full p-0 max-w-sm shadow-lg transition hover:scale-[1.02]">
      <Link href={pages.movie(id)}>
        <CardHeader className="p-0 relative">
          <AppImage
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width={500}
            height={750}
            skeletonHeight="h-80"
            skeletonWidth="w-full"
            priority={true}
            className="w-full object-cover"
          />
        </CardHeader>
      </Link>
      <CardContent className="p-4 space-y-2">
        <Link href={pages.movie(id)}>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground">{release_date}</p>
        <CardDescription className="text-sm line-clamp-3">
          {overview}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
