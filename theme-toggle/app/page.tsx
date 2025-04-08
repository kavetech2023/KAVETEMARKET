"use client"

import { Bitcoin, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Logo centered at the top */}
      <div className="w-full flex justify-center pt-6">
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-200 dark:to-amber-300 rounded-full opacity-80 shadow-md"></div>
            <span className="absolute inset-0 flex items-center justify-center text-amber-800 dark:text-amber-900 text-lg font-semibold">
              K
            </span>
          </div>
          <span className="text-gray-700 dark:text-gray-300 text-sm font-medium mt-1">kavete.org</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center gap-10 my-8">
        {/* Face that changes based on theme */}
        <div className="text-9xl">
          <div className="block dark:hidden">😊</div>
          <div className="hidden dark:block">😢</div>
        </div>

        {/* Theme text */}
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </h1>

        {/* Fancy toggle switch */}
        <div
          onClick={toggleTheme}
          className="relative w-64 h-16 rounded-full p-1 cursor-pointer shadow-lg overflow-hidden"
          style={{
            background: isDarkMode
              ? "linear-gradient(to right, #0f172a, #1e293b)"
              : "linear-gradient(to right, #e0f2fe, #bae6fd)",
          }}
        >
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {!isDarkMode && <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-200 rounded-full opacity-70"></div>}
            {isDarkMode && (
              <>
                <div className="absolute top-2 right-6 w-1 h-1 bg-white rounded-full opacity-50"></div>
                <div className="absolute top-6 right-12 w-2 h-2 bg-white rounded-full opacity-30"></div>
                <div className="absolute bottom-3 left-10 w-1 h-1 bg-white rounded-full opacity-40"></div>
              </>
            )}
          </div>

          {/* Sliding element */}
          <div
            className="absolute top-1 h-14 w-32 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out shadow-md"
            style={{
              left: isDarkMode ? "calc(100% - 8px - 128px)" : "4px",
              background: isDarkMode
                ? "linear-gradient(to bottom, #475569, #334155)"
                : "linear-gradient(to bottom, #fef9c3, #fde68a)",
            }}
          >
            <div className="flex items-center gap-2">
              {isDarkMode ? (
                <>
                  <Moon className="h-6 w-6 text-gray-200" />
                  <span className="text-gray-200 font-medium">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="h-6 w-6 text-amber-600" />
                  <span className="text-amber-700 font-medium">Light</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Donation section */}
      <div className="max-w-md mx-auto mt-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <Bitcoin className="h-5 w-5 text-amber-500" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Make the World Happier</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Your donation can help spread more smiles around the world. Support our mission to create a happier place for
          everyone.
        </p>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
          Every contribution brings more light to someone&apos;s day
        </p>
      </div>
    </div>
  )
}
