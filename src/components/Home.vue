<template>
  <div class="relative isolate px-6 lg:px-8 bg-black overflow-hidden">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-0 w-150 h-150 -translate-x-1/2 bg-yellow-400 opacity-20 blur-3xl rounded-full"
      ></div>
    </div>

    <div class="relative mx-auto max-w-5xl min-h-screen flex items-center justify-center">
      <div
        class="flex flex-col md:flex-row items-center gap-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
      >
        <!-- TEXT -->
        <div class="text-center md:text-left max-w-xl">
          <h1 class="text-4xl sm:text-6xl font-bold text-white">
            Hi, I’m <span class="text-yellow-400">James Patrick Medina</span>
          </h1>

          <p class="mt-6 text-lg text-gray-300">
            Aspiring Web Developer | Fresh Graduate <br />
            I create clean, responsive, and user-friendly web applications.
          </p>
          <!-- Links -->
          <div class="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="/projects"
              class="inline-block px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              class="inline-block px-6 py-3 text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        <!-- IMAGE SLIDER -->
        <div class="shrink-0">
          <img
            :src="images[currentIndex]"
            alt="Profile"
            class="w-64 h-90 object-cover rounded-2xl border border-white/20 shadow-lg transition-opacity duration-700"
            :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
            @mouseenter="pauseSlider"
            @mouseleave="resumeSlider"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pic1 from '@/assets/Self-Picture1.jpg'
import pic2 from '@/assets/Self-Picture2.jpg'
import pic3 from '@/assets/Self-Picture3.jpg'

export default {
  data() {
    return {
      currentIndex: 0,
      images: [pic1, pic2, pic3],
      isVisible: true,
      intervalId: null,
    }
  },
  methods: {
    startSlider() {
      this.intervalId = setInterval(() => {
        this.isVisible = false

        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length
          this.isVisible = true
        }, 600)
      }, 3000) //
    },

    pauseSlider() {
      clearInterval(this.intervalId)
    },

    resumeSlider() {
      this.startSlider()
    },
  },

  mounted() {
    this.startSlider()
  },

  beforeUnmount() {
    clearInterval(this.intervalId)
  },
}
</script>
