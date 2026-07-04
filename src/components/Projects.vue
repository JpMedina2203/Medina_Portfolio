<script setup lang="ts">
import Data from '@/data/index.json'
const Experience = Data.Experience.splice(1)
</script>

<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <div
      v-for="(experience, index) in Experience"
      class="w-full px-10 hidden lg:flex xl:flex justify-start items-center my-10"
    >
      <div class="grid grid-cols-[auto_1fr] gap-10 w-full">
        <!-- Vertical Title (Leftmost) -->
        <div
          class="flex flex-col items-center justify-center bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-300 rounded-2xl w-12 py-4 shadow-md shadow-yellow-500/30"
        >
          <div v-for="(letter, letterIndex) in experience.type" :key="letterIndex">
            <span class="text-white font-bold text-lg"> {{ letter }}</span>
          </div>
        </div>
        <!-- Experience Card -->
        <!-- Experience Card -->
        <div class="flex justify-center">
          <div
            class="w-full flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Experience Image (TOP & BIGGER) -->
            <div class="w-full max-w-2xl h-90">
              <img
                :src="experience.image"
                :alt="experience.company"
                class="w-full h-full object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            <!-- Experience Details -->
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

              <!-- Bottom Section -->
              <div>
                <div
                  class="h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent my-7"
                ></div>

                <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4">
                  <div
                    v-for="(tech, index) in experience.technologies"
                    :key="index"
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
        </div>
      </div>
    </div>
  </div>
</template>
