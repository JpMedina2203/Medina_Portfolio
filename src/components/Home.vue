<template>
  <div class="relative isolate px-6 lg:px-8 bg-black overflow-hidden">
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute left-1/2 top-0 w-150 h-150 -translate-x-1/2 bg-yellow-400 opacity-20 blur-3xl rounded-full"
      ></div>
    </div>

    <div
      class="relative mx-auto max-w-3xl min-h-screen flex items-center justify-center text-center"
    >
      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
        <h1 class="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Hi, I’m
          <span class="text-yellow-400">James Patrick Medina</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Aspiring Web Developer | Fresh Graduate <br />
          I create clean, responsive, and user-friendly web applications using modern technologies.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            class="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-md hover:bg-yellow-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            class="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
