<script setup lang="ts">
const resumeWithPhoto = '/Resume/Medina_JamesPatrick_Resume_w-Picture.pdf'
const resumeWithoutPhoto = '/Resume/Medina_James_Patrick_Resume_ATS.pdf'
</script>

<template>
  <div class="relative isolate px-6 lg:px-8 bg-black overflow-hidden items-center">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-0 w-150 h-150 -translate-x-1/2 bg-yellow-400 opacity-20 blur-3xl rounded-full"
      ></div>
    </div>

    <div class="relative bottom-15 mx-auto max-w-5xl min-h-screen flex items-center justify-center">
      <div
        class="flex flex-col items-center gap-6 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl max-w-xl w-full"
      >
        <h1 class="text-4xl sm:text-5xl font-bold text-white">
          My <span class="text-yellow-400">Resume</span>
        </h1>

        <p class="text-lg text-gray-300">
          Select the resume format that best fits your application.
        </p>
        <div class="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            :href="resumeWithPhoto"
            download="Medina_JamesPatrick_Resume_w-Picture.pdf"
            class="inline-block px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Download with Photo
          </a>
          <a
            :href="resumeWithoutPhoto"
            download="Medina_James_Patrick_Resume_ATS.pdf"
            class="inline-block px-6 py-3 text-lg font-semibold text-yellow-500 border border-yellow-500 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition-colors duration-300"
          >
            Download ATS Version
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
