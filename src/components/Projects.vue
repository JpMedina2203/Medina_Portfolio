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

    <!-- Experience Loop -->
    <div
      v-for="(experience, index) in Experience"
      :key="index"
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
        <div class="flex justify-center">
          <div
            class="w-full flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Image -->
            <div
              class="w-full max-w-2xl h-90 relative flex items-center justify-center group overflow-hidden"
            >
              <!-- Gradient Hint Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 opacity-60 group-hover:opacity-80 transition duration-300 pointer-events-none"
              ></div>

              <!-- Prev Button -->
              <button
                @click="prevImage(experience.images, index)"
                class="absolute left-3 z-10 bg-yellow-500/80 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                ‹
              </button>

              <!-- Image with Transition -->
              <transition name="fade-slide" mode="out-in">
                <img
                  :key="currentImageIndex[index]"
                  :src="experience.images[currentImageIndex[index] || 0]"
                  :alt="experience.company"
                  class="w-full h-full object-contain rounded-2xl shadow-lg"
                  @load="initIndex(index)"
                />
              </transition>

              <!-- Next Button -->
              <button
                @click="nextImage(experience.images, index)"
                class="absolute right-3 z-10 bg-yellow-500/80 hover:bg-yellow-600 text-white px-3 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                ›
              </button>

              <!-- Dots Indicator -->
              <div class="absolute bottom-3 flex gap-2 justify-center items-center w-full">
                <span
                  v-for="(img, i) in experience.images"
                  :key="i"
                  class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  :class="
                    i === (currentImageIndex[index] || 0)
                      ? 'bg-yellow-400 border-2 border-black scale-125'
                      : 'bg-black border-2 border-amber-400'
                  "
                ></span>
              </div>
            </div>

            <!-- Details -->
            <div class="text-white text-justify flex flex-col h-full w-full">
              <div class="mb-4 text-center">
                <h2 class="text-xl sm:text-2xl font-bold text-yellow-400">
                  {{ experience.company }}
                </h2>
                <p class="text-gray-300 font-medium">
                  {{ experience.role }}
                </p>
                <p class="text-gray-400 text-sm">
                  {{ experience.year }}
                </p>
              </div>

              <div class="flex flex-col flex-1">
                <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                  {{ experience.description1 }}
                </p>
                <br />
                <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                  {{ experience.description2 }}
                </p>
              </div>

              <!-- Divider inside card -->
              <div
                class="h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent my-7"
              ></div>

              <!-- Technologies -->
              <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4">
                <div
                  v-for="(tech, techIndex) in experience.technologies"
                  :key="techIndex"
                  class="w-full flex items-center gap-4 p-4 rounded-xl text-white bg-yellow-500 shadow-md hover:bg-yellow-600 transition-all duration-300 cursor-pointer group h-16"
                >
                  <div
                    class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
                  >
                    <img
                      :src="tech.photo"
                      alt="Technology"
                      class="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div class="flex flex-col">
                    <span class="font-semibold text-sm">{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full my-5 hidden lg:block col-span-2">
          <div
            class="w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
