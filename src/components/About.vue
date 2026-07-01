<script setup lang="ts">
const TechnicalSkills = [
  {
    category: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Material UI (MUI)'],
  },
  {
    category: 'Backend Development',
    skills: ['PHP', 'Python', 'TypeScript'],
  },
  {
    category: 'Frameworks & Package Managers',
    skills: ['React.js', 'Vue.js', 'Next.js', 'npm', 'yarn', 'pnpm'],
  },
  {
    category: 'Database Management and Cloud Services',
    skills: ['MySQL', 'SQL Server', 'Supabase', 'Firebase'],
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub', 'GitLab'],
  },
  {
    category: 'Soft Skills',
    skills: ['Problem-solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management'],
  },
]
</script>

<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div
      class="w-[50vw] text-center rounded-3xl bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 mt-10 py-4 shadow-lg shadow-yellow-500/30"
    >
      <h1 class="text-[3vh] font-bold text-white">About Me</h1>
    </div>
    <!-- Content -->
    <div
      class="max-w-7xl w-full my-[7vh] flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
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
        <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
          I am James Patrick L. Medina, a Computer Engineering graduate with a strong foundation in
          programming, software development, and analytical problem-solving. Throughout my academic
          journey and hands-on projects, I have developed practical experience in building
          applications and designing efficient solutions that contribute to successful project
          outcomes. I am comfortable working with modern development tools and technologies, and I
          continuously strive to improve my technical capabilities through learning and real-world
          application.
        </p>
        <br />
        <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
          I am deeply passionate about innovation and committed to staying up to date with the
          latest industry trends and advancements. I value collaboration and thrive in dynamic,
          fast-paced environments where teamwork and adaptability are essential. With a strong work
          ethic and attention to detail, I aim to deliver high-quality results while contributing
          positively to any team I am part of. I am eager to grow professionally, take on new
          challenges, and make meaningful contributions to the field of technology.
        </p>
      </div>
    </div>

    <!-- Second section -->
    <div class="w-full px-10 hidden lg:flex xl:flex justify-start items-center my-10">
      <div class="grid grid-cols-[auto_1fr] gap-10 w-full">
        <!-- Smaller Vertical Title (Leftmost) -->
        <div
          class="flex flex-col items-center justify-center bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-300 rounded-2xl w-12 py-4 shadow-md shadow-yellow-500/30"
        >
          <span class="text-white font-bold text-lg">E</span>
          <span class="text-white font-bold text-lg">X</span>
          <span class="text-white font-bold text-lg">P</span>
          <span class="text-white font-bold text-lg">E</span>
          <span class="text-white font-bold text-lg">R</span>
          <span class="text-white font-bold text-lg">I</span>
          <span class="text-white font-bold text-lg">E</span>
          <span class="text-white font-bold text-lg">N</span>
          <span class="text-white font-bold text-lg">C</span>
          <span class="text-white font-bold text-lg">E</span>
        </div>

        <!-- Content Card -->
        <div class="flex justify-center">
          <div
            class="w-full flex items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Image -->
            <div class="w-full">
              <img
                src="@/assets/Pixel8_Logo.png"
                alt="Pixel8 Logo"
                class="w-[50vh] h-full rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Text -->
            <div class="text-white text-justify">
              <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                Executed automated testing at Pixel8 Web Solutions and Consultancy Inc. to ensure
                the quality and performance of web applications by conducting functional and
                regression tests across key website features. Utilized tools such as Selenium and
                Cypress to develop and execute test scripts, identify defects, and improve overall
                system reliability and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Experience section for small screens -->
    <div class="w-full lg:hidden mt-2 flex items-center gap-3 px-4">
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Experience
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>
    <div class="flex lg:hidden justify-center lg:gap-10 xl:gap-15 md:gap-10">
      <div
        class="lg:w-100 xl:w-120 max-w-5xl w-full my-[7vh] flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
      >
        <!-- Image (Top) -->
        <div class="w-full h-60 md:w-fit md:h-80">
          <img
            src="@/assets/Pixel8_Logo.png"
            alt="Profile Picture"
            class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>

        <!-- Text (Bottom) -->
        <div class="text-white text-justify">
          <p class="indent-8 text-gray-300 leading-relaxed text-[2vh]">
            Executed automated testing at Pixel8 Web Solutions and Consultancy Inc. to ensure the
            quality and performance of web applications by conducting functional and regression
            tests across key website features. Utilized tools such as Selenium and Cypress to
            develop and execute test scripts, identify defects, and improve overall system
            reliability and user experience.
          </p>
        </div>
      </div>
    </div>
    <!-- Third Section  -->
    <div class="w-full flex items-center gap-3 my-5 px-10 md:px-4">
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Technical Skills
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:px-10 md:px-4 mb-100"
    >
      <div
        v-for="(skillCategory, index) in TechnicalSkills"
        :key="index"
        class="w-full max-w-5xl mx-auto flex flex-col gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
      >
        <!-- content -->
        <h1 class="text-xl sm:text-lg font-bold text-yellow-400">{{ skillCategory.category }}</h1>
        <div
          class="flex-col grid lg:grid-cols-2 md:grid-cols-2 xl:col-end-2 sm:grid-cols-1 gap-4 mt-2"
        >
          <div
            v-for="(skill, index) in skillCategory.skills"
            :key="index"
            class="w-full flex items-center gap-4 p-4 rounded-xl bg-white/20 border border-white/20 hover:bg-yellow-500/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group h-16"
          >
            <div
              class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
            >
              <img
                src="@/assets/Pixel8_Logo.png"
                alt="HTML5"
                class="10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div class="flex flex-col">
              <span class="text-white font-semibold text-sm">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
