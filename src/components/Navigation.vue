<script setup>
import { ref } from 'vue'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
]

const mobileOpen = ref(false)

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <div class="w-full min-h-screen bg-black">
    <!-- 🔥 NAVBAR -->
    <nav class="sticky top-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- ✅ FLEX CONTAINER -->
        <div class="flex h-16 items-center justify-between">
          <!-- 🟡 LOGO (LEFT) -->
          <div class="flex items-center">
            <img src="@/assets/Portfolio_Logo.png" class="h-12" alt="Logo" />
          </div>

          <!-- 🖥️ DESKTOP NAV (RIGHT) -->
          <div class="hidden sm:flex items-center space-x-6">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.path"
              class="relative px-3 py-2 text-sm font-medium text-white transition duration-300 hover:text-yellow-400"
              active-class="bg-yellow-500 rounded-lg"
            >
              {{ item.name }}

              <!-- ✨ Apple-style underline -->
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
              ></span>
            </router-link>
          </div>

          <!-- 📱 MOBILE BUTTON (RIGHT) -->
          <div class="sm:hidden">
            <button
              type="button"
              @click="toggleMobile"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-white/10 transition"
            >
              <span class="sr-only">Open menu</span>

              <!-- Hamburger -->
              <svg
                v-if="!mobileOpen"
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <!-- X icon -->
              <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- 📱 MOBILE MENU -->
      <transition name="mobile">
        <div
          v-if="mobileOpen"
          class="sm:hidden px-4 pt-2 pb-4 space-y-2 bg-black/90 backdrop-blur-xl border-t border-white/10"
        >
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            @click="mobileOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition"
            active-class="text-yellow-400"
          >
            {{ item.name }}
          </router-link>
        </div>
      </transition>
    </nav>

    <!-- PAGE CONTENT -->
    <router-view />
  </div>
</template>

<style scoped>
/* ✨ Smooth mobile dropdown */
.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.3s ease;
}

.mobile-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.mobile-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.mobile-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
