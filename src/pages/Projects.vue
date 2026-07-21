<script setup lang="ts">
import Data from '@/data/index.json'
import { ref } from 'vue'

const Experience = Data.Experience.splice(1)

// store index per experience
const currentImageIndex = ref<number[]>([])

function initIndex(index: number) {
  if (currentImageIndex.value[index] === undefined) {
    currentImageIndex.value[index] = 0
  }
}

function nextImage(images: string[], index: number) {
  currentImageIndex.value[index] = (currentImageIndex.value[index] + 1) % images.length
}

function prevImage(images: string[], index: number) {
  currentImageIndex.value[index] =
    (currentImageIndex.value[index] - 1 + images.length) % images.length
}
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.98);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.98);
}
</style>

<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <!-- Title -->
    <div
      class="w-[50vw] text-center rounded-3xl bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 my-10 py-4 shadow-lg shadow-yellow-500/30"
    >
      <h1 class="text-[3vh] font-bold text-white">My Projects</h1>
    </div>

    <!-- ================= DESKTOP / LARGE SCREEN ================= -->
    <div
      v-for="(experience, index) in Experience"
      :key="'desktop-' + index"
      class="w-full px-10 hidden lg:flex xl:flex justify-start items-center"
    >
      <div class="grid grid-cols-[auto_1fr] gap-8 w-full my-3">
        <!-- Vertical Title -->
        <div
          class="flex flex-col items-center justify-center bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-300 rounded-2xl w-12 py-4 shadow-md shadow-yellow-500/30"
        >
          <div v-for="(letter, letterIndex) in experience.type" :key="letterIndex">
            <span class="text-white font-bold text-lg">{{ letter }}</span>
          </div>
        </div>

        <!-- Card -->
        <div
          class="w-full flex flex-col items-center gap-4 bg-white/5 border border-white/30 rounded-3xl p-6 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
        >
          <!-- IMAGE + BUTTONS -->
          <div class="w-full max-w-3xl flex items-center justify-center gap-3">
            <!-- Prev -->
            <button
              @click="prevImage(experience.images, index)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
            >
              ‹
            </button>

            <!-- Image -->
            <div
              class="relative w-full h-110 flex items-center justify-center group overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40 opacity-60 group-hover:opacity-80 transition duration-300 pointer-events-none"
              ></div>

              <transition name="fade-slide" mode="out-in">
                <img
                  :key="currentImageIndex[index]"
                  :src="experience.images[currentImageIndex[index] || 0]"
                  :alt="experience.company"
                  class="w-full h-full object-contain rounded-2xl shadow-lg"
                  @load="initIndex(index)"
                />
              </transition>

              <!-- Dots -->
              <div class="absolute bottom-2 flex gap-2 justify-center items-center w-full">
                <span
                  v-for="(img, i) in experience.images"
                  :key="i"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="
                    i === (currentImageIndex[index] || 0)
                      ? 'bg-yellow-400 border border-black scale-125'
                      : 'bg-black border border-amber-400'
                  "
                ></span>
              </div>
            </div>

            <!-- Next -->
            <button
              @click="nextImage(experience.images, index)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
            >
              ›
            </button>
          </div>

          <!-- DETAILS -->
          <div class="text-white text-justify flex flex-col w-full gap-3">
            <!-- Header -->
            <div class="text-center">
              <h2 class="text-lg sm:text-xl font-bold text-yellow-400">
                {{ experience.company }}
              </h2>
              <p class="text-gray-300 text-sm">
                {{ experience.role }}
              </p>
              <p class="text-gray-400 text-xs">
                {{ experience.year }}
              </p>
            </div>

            <!-- Description -->
            <div class="flex flex-col gap-3">
              <p class="text-gray-300 indent-6 leading-relaxed text-[1.7vh] sm:text-[1.9vh]">
                {{ experience.description1 }}
              </p>
              <p class="text-gray-300 indent-6 leading-relaxed text-[1.7vh] sm:text-[1.9vh]">
                {{ experience.description2 }}
              </p>
            </div>

            <!-- Divider -->
            <div
              class="h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent my-3"
            ></div>

            <!-- Technologies -->
            <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-3">
              <div
                v-for="(tech, techIndex) in experience.technologies"
                :key="techIndex"
                class="w-full flex items-center gap-3 p-3 rounded-xl text-white bg-yellow-500 shadow-md hover:bg-yellow-600 transition-all duration-300 cursor-pointer group h-14"
              >
                <div
                  class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
                >
                  <img
                    :src="tech.photo"
                    alt="Technology"
                    class="h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <span class="font-semibold text-xs sm:text-sm">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Line (skip after last item) -->
        <div v-if="index !== Experience.length - 1" class="col-span-2">
          <div class="w-full my-20 hidden lg:block">
            <div
              class="w-full h-1 bg-linear-to-r from-transparent via-yellow-500 to-transparent"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= SMALL SCREEN / TABLET ================= -->
    <div class="flex lg:hidden flex-col items-center gap-6 w-full">
      <div
        v-for="(experience, index) in Experience"
        :key="'mobile-' + index"
        class="w-full flex flex-col items-center"
      >
        <div
          class="max-w-5xl w-full my-[3vh] flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-6 sm:p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
        >
          <!-- IMAGE + BUTTONS -->
          <div class="w-full flex items-center justify-center gap-3">
            <!-- Prev -->
            <button
              @click="prevImage(experience.images, index)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
            >
              ‹
            </button>

            <!-- Image -->
            <div
              class="relative w-full h-70 sm:h-90 flex items-center justify-center group overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40 opacity-60 group-hover:opacity-80 transition duration-300 pointer-events-none"
              ></div>

              <transition name="fade-slide" mode="out-in">
                <img
                  :key="currentImageIndex[index]"
                  :src="experience.images[currentImageIndex[index] || 0]"
                  :alt="experience.company"
                  class="w-full h-full object-contain rounded-2xl shadow-lg"
                  @load="initIndex(index)"
                />
              </transition>

              <!-- Dots -->
              <div class="absolute bottom-2 flex gap-2 justify-center items-center w-full">
                <span
                  v-for="(img, i) in experience.images"
                  :key="i"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="
                    i === (currentImageIndex[index] || 0)
                      ? 'bg-yellow-400 border border-black scale-125'
                      : 'bg-black border border-amber-400'
                  "
                ></span>
              </div>
            </div>

            <!-- Next -->
            <button
              @click="nextImage(experience.images, index)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 active:scale-95"
            >
              ›
            </button>
          </div>

          <!-- Header -->
          <div class="text-center">
            <h2 class="text-lg sm:text-xl font-bold text-yellow-400">
              {{ experience.company }}
            </h2>
            <p class="text-gray-300 text-sm">
              {{ experience.role }}
            </p>
            <p class="text-gray-400 text-xs">
              {{ experience.year }}
            </p>
          </div>

          <!-- Description -->
          <div class="text-white text-justify flex flex-col w-full gap-3">
            <p class="text-gray-300 indent-6 leading-relaxed text-[1.7vh] sm:text-[1.9vh]">
              {{ experience.description1 }}
            </p>
            <p class="text-gray-300 indent-6 leading-relaxed text-[1.7vh] sm:text-[1.9vh]">
              {{ experience.description2 }}
            </p>
          </div>

          <!-- Divider -->
          <div
            class="w-full h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent my-3"
          ></div>

          <!-- Technologies -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            <div
              v-for="(tech, techIndex) in experience.technologies"
              :key="techIndex"
              class="w-full flex items-center gap-3 p-3 rounded-xl text-white bg-yellow-500 shadow-md hover:bg-yellow-600 transition-all duration-300 cursor-pointer group h-14"
            >
              <div
                class="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
              >
                <img
                  :src="tech.photo"
                  alt="Technology"
                  class="h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <span class="font-semibold text-xs sm:text-sm">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Divider between mobile cards (skip after last) -->
        <div v-if="index !== Experience.length - 1" class="w-full max-w-5xl">
          <div
            class="w-full h-1 my-4 bg-linear-to-r from-transparent via-yellow-500 to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
