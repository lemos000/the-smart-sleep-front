"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function BackRedirectHandler() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.history.replaceState(null, "", "/desconto")

      window.history.pushState(null, "", "/")

      const handlePop = () => router.replace("/desconto")

      window.addEventListener("popstate", handlePop)
      return () => window.removeEventListener("popstate", handlePop)
    }
  }, [router])

  return null
}
