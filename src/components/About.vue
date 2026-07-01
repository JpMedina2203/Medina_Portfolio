<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div
      class="w-full max-w-4xl text-center rounded-3xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 mt-10 py-4 shadow-lg shadow-yellow-500/30"
    >
      <h1 class="text-2xl sm:text-3xl font-bold text-white">About Me</h1>
    </div>
    <!-- Content -->
    <div
      class="max-w-5xl w-full my-[7vh] flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
    >
      <!-- Image -->
      <div class="w-48 h-60 md:w-64 md:h-80 shrink-0">
        <img
          src="@/assets/self-picture.jpg"
          alt="Profile Picture"
          class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      <!-- Text -->
      <div class="text-white text-justify">
        <p class="text-gray-300 leading-relaxed">
          I am James Patrick L. Medina, a Computer Engineering graduate with a solid foundation in
          programming, software development, and problem-solving. I have hands-on experience
          building applications and creating efficient solutions that contribute to successful
          project outcomes. Passionate about innovation, I am eager to grow my technical skills and
          stay up to date with the latest industry trends. I am committed to delivering high-quality
          work and collaborating effectively within dynamic and fast-paced teams.
        </p>
      </div>
    </div>

    <!-- Second section -->
    <div class="w-full lg:flex justify-center items-center mt-5 hidden xl:flex">
      <div class="max-w-6xl w-full flex items-center gap-6">
        <!-- Vertical Letter Title -->
        <div
          class="hidden md:flex flex-col items-center justify-center bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-300 rounded-3xl px-4 py-6 shadow-lg shadow-yellow-500/30"
        >
          <span class="text-white font-bold text-xl">E</span>
          <span class="text-white font-bold text-xl">X</span>
          <span class="text-white font-bold text-xl">P</span>
          <span class="text-white font-bold text-xl">E</span>
          <span class="text-white font-bold text-xl">R</span>
          <span class="text-white font-bold text-xl">I</span>
          <span class="text-white font-bold text-xl">E</span>
          <span class="text-white font-bold text-xl">N</span>
          <span class="text-white font-bold text-xl">C</span>
          <span class="text-white font-bold text-xl">E</span>
        </div>

        <!-- Content Card -->
        <div class="flex justify-center lg:gap-10 xl:gap-15 md:gap-10">
          <div
            class="lg:w-100 xl:w-120 max-w-5xl w-full my-[7vh] flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Image (Top) -->
            <div class="w-48 h-60 md:w-64 md:h-80">
              <img
                src="@/assets/self-picture.jpg"
                alt="Profile Picture"
                class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Text (Bottom) -->
            <div class="text-white text-justify">
              <p class="text-gray-300 leading-relaxed">
                I am James Patrick L. Medina, a Computer Engineering graduate with a solid
                foundation in programming, software development, and problem-solving...
              </p>
            </div>
          </div>

          <div
            class="lg:w-100 xl:w-120 max-w-5xl w-full my-[7vh] flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Image (Top) -->
            <div class="w-48 h-60 md:w-64 md:h-80">
              <img
                src="@/assets/self-picture.jpg"
                alt="Profile Picture"
                class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Text (Bottom) -->
            <div class="text-white text-justify">
              <p class="text-gray-300 leading-relaxed">
                I am James Patrick L. Medina, a Computer Engineering graduate with a solid
                foundation in programming, software development, and problem-solving...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
