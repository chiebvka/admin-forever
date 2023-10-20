import * as React from 'react'; // Import React if not already imported
import { Badge, Cog, Home, Share, Sliders, Twitch, Twitter } from 'lucide-react';




type sidelink = {
    index: number;
    href: string;
    title: string;
    icon: string
  };



  export const navigation: sidelink[] = [
    { 
        index: 1,
        title: 'Home',
        href:"/", 
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZGZjZmMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ob21lIj48cGF0aCBkPSJtMyA5IDktNyA5IDd2MTFhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iOSAyMiA5IDEyIDE1IDEyIDE1IDIyIi8+PC9zdmc+", 
    },
    { 
        index: 2, 
        title: 'Blogs', 
        href:"/blogs", 
        icon:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZGZjZmMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbGlwYm9hcmQtc2lnbmF0dXJlIj48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNOCA0SDZhMiAyIDAgMCAwLTIgMnYxNGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LS41Ii8+PHBhdGggZD0iTTE2IDRoMmEyIDIgMCAwIDEgMS43MyAxIi8+PHBhdGggZD0iTTE4LjQyIDkuNjFhMi4xIDIuMSAwIDEgMSAyLjk3IDIuOTdMMTYuOTUgMTcgMTMgMThsLjk5LTMuOTUgNC40My00LjQ0WiIvPjxwYXRoIGQ9Ik04IDE4aDEiLz48L3N2Zz4=", 
    },
    { 
        index: 3, 
        title: 'Newsletter Subscribers', 
        href:"/users", 
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZGZjZmMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hdC1zaWduIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTE2IDh2NWEzIDMgMCAwIDAgNiAwdi0xYTEwIDEwIDAgMSAwLTQgOCIvPjwvc3ZnPg==", 
    },
    { 
        index: 4, 
        title: 'Blog Tags', 
        href:"/blog-tag", 
        icon:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZGZjZmMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10YWdzIj48cGF0aCBkPSJNOSA1SDJ2N2w2LjI5IDYuMjljLjk0Ljk0IDIuNDguOTQgMy40MiAwbDMuNTgtMy41OGMuOTQtLjk0Ljk0LTIuNDggMC0zLjQyTDkgNVoiLz48cGF0aCBkPSJNNiA5LjAxVjkiLz48cGF0aCBkPSJtMTUgNSA2LjMgNi4zYTIuNCAyLjQgMCAwIDEgMCAzLjRMMTcgMTkiLz48L3N2Zz4=", 
    },
    // { 
    //     index: 5, 
    //     title: 'Plan', 
    //     href:"/", 
    //     icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvbWUiPjxwYXRoIGQ9Im0zIDkgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz48cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz48L3N2Zz4=", 
    // },
    // { 
    //     index: 6, 
    //     title: 'Plan', 
    //     href:"/", 
    //     icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvbWUiPjxwYXRoIGQ9Im0zIDkgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz48cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz48L3N2Zz4=", 
    // },
    // { 
    //     index: 7, 
    //     title: 'Plan', 
    //     href:"/", 
    //     icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvbWUiPjxwYXRoIGQ9Im0zIDkgOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz48cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz48L3N2Zz4=", 
    // },
  ]