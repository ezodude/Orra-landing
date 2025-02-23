import '@/styles/global.css'
import '@/styles/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'focus-visible'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useRouter } from "next/router";

library.add(faUser);
library.add(faSignOutAlt);

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export default function App({ Component, pageProps }) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createPagesBrowserClient())
  
  const router = useRouter()
  
  useEffect(() => {
    // Track page views in PostHog
    const handleRouteChange = () => posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <PostHogProvider client={posthog}>
        <Component {...pageProps} />
      </PostHogProvider>
    </SessionContextProvider>
  )
}
