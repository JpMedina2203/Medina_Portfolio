<script setup>
import { ref } from 'vue'
const navigation = [
  { name: 'Home', path: '/', current: true },
  { name: 'About', path: '/about', current: false },
  { name: 'Projects', path: '/projects', current: false },
  { name: 'Resume', path: '/resume', current: false },
  { name: 'Contact', path: '/contact', current: false },
]
const mobileOpen = ref(false)

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}
</script>
<template>
  <div class="fixed top-0 left-0 w-full h-full">
    <nav
      class="sticky top-0 right-0 left-0 bg-black border-b border-white/30 backdrop-blur-md z-50"
    >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white"
              @click="toggleMobile"
            >
              <span class="sr-only">Open main menu</span>

              <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- Logo + Desktop Nav -->
          <div class="flex flex-1 items-center justify-between sm:items-stretch">
            <!-- Logo -->
            <div class="flex shrink-0 items-center">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg"
                class="h-8 w-auto"
                alt="Logo"
              />
            </div>

            <!-- Desktop Menu -->
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.path"
                  class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/50 hover:text-gray-300"
                  active-class="bg-yellow-500 text-white"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="mobileOpen" class="sm:hidden px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.path"
          @click="mobileOpen = false"
          class="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/50 hover:text-gray-300"
          active-class="bg-gray-900 text-white"
        >
          {{ item.name }}
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>
