<script setup lang="ts">
import Data from '@/data/index.json'
const TechnicalSkills = Data.TechnicalSkills
const Experience = Data.Experience[0]
const Education = Data.Education
</script>

<template>
  <div class="min-h-screen w-full bg-black flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <!--Aboute Me Header -->
    <div
      class="w-[50vw] text-center rounded-3xl bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 mt-10 py-4 shadow-lg shadow-yellow-500/30"
    >
      <h1 class="text-[3vh] font-bold text-white">About Me</h1>
    </div>
    <!-- profile Section-->
    <div
      class="w-full lg:max-w-7xl md:max-6xl px-10 my-[7vh] xl:w-full flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
    >
      <!-- ProfileImage -->
      <div class="w-48 h-60 md:w-64 md:h-80 shrink-0">
        <img
          src="@/assets/self-picture.jpg"
          alt="Profile Picture"
          class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      <!-- Profile Details -->
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
    <!-- Experience section for lg and xl screens -->
    <div class="w-full items-center gap-3 my-5 px-10 md:px-4 hidden lg:flex xl:flex">
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Experience
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>
    <div class="w-full px-10 hidden lg:flex xl:flex justify-start items-center my-10">
      <div class="grid grid-cols-[auto_1fr] gap-10 w-full">
        <!-- Vertical Title (Leftmost) -->
        <div
          class="flex flex-col items-center justify-center bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-300 rounded-2xl w-12 py-4 shadow-md shadow-yellow-500/30"
        >
          <span class="text-white font-bold text-lg">A</span>
        </div>
        <!-- Experience Card -->
        <div class="flex justify-center">
          <div
            class="w-full flex items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Experience Image -->
            <div class="w-70 h-70 shrink-0">
              <img
                :src="Experience.images[0]"
                :alt="Experience.company"
                class="w-full h-full object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
            <!-- Experience Details -->
            <div class="text-white text-justify flex flex-col h-full">
              <!-- NEW: Education Header -->
              <div class="mb-4">
                <h2 class="text-xl sm:text-2xl font-bold text-yellow-400">
                  {{ Experience.company }}
                </h2>
                <p class="text-gray-300 font-medium">
                  {{ Experience.role }}
                </p>
                <p class="text-gray-400 text-sm">
                  {{ Experience.year }}
                </p>
              </div>
              <div class="flex flex-col flex-1">
                <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                  {{ Experience.description1 }}
                </p>
                <br />
                <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                  {{ Experience.description2 }}
                </p>
              </div>
              <!-- Bottom Section -->
              <div>
                <div
                  class="h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent mb-3"
                ></div>
                <!-- Skill Badge -->
                <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-4">
                  <div
                    v-for="(experience, index) in Experience.technologies"
                    :key="index"
                    class="w-full flex items-center gap-4 p-4 rounded-xl text-white bg-yellow-500 shadow-md hover:bg-yellow-600 transition-all duration-300 cursor-pointer group h-16"
                  >
                    <div
                      class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
                    >
                      <img
                        :src="experience.photo"
                        alt="Technology"
                        class="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div class="flex flex-col">
                      <span class="font-semibold text-sm">{{ experience.name }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Experience section for small screens -->
    <div class="w-full lg:hidden mt-2 flex items-center gap-3 px-4">
      <!-- Experience Title -->
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
        <!-- Experience Image -->
        <div class="w-full h-60 md:w-fit md:h-80">
          <img
            :src="Experience.images[0]"
            :alt="Experience.company"
            class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>
        <!-- Experience Details -->
        <div class="text-white text-justify flex flex-col h-full">
          <div class="flex flex-col justify-center flex-1">
            <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
              {{ Experience.description1 }}
            </p>
            <br />
            <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
              {{ Experience.description1 }}
            </p>
          </div>
          <!-- Bottom Section -->
          <div>
            <div
              class="h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent mb-3"
            ></div>
            <!-- Skill Badge -->
            <div class="grid sm:grid-cols-2 @min-sm:grid-cols-1 gap-4 sm:gap-2">
              <div
                v-for="(experience, index) in Experience.technologies"
                :key="index"
                class="w-full flex items-center gap-4 p-4 rounded-xl text-white bg-yellow-500 shadow-md hover:bg-yellow-600 transition-all duration-300 cursor-pointer group h-15"
              >
                <div
                  class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
                >
                  <img
                    :src="experience.photo"
                    alt="Selenium"
                    class="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div class="flex flex-col">
                  <span class="font-semibold text-sm">{{ experience.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Third Section  -->
    <div class="w-full items-center gap-3 my-5 px-10 md:px-4 hidden lg:flex xl:flex">
      <!-- Technical Skills Title lg screen -->
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Technical Skills
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>
    <!-- Technical Skills Title sm -->
    <div class="w-full my-5 lg:hidden mt-2 flex items-center gap-3 px-4">
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Technical Skills
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>
    <!-- Technical Skills Badge -->
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 mt-4 lg:px-10 md:px-4"
    >
      <div
        v-for="(skillCategory, index) in TechnicalSkills"
        :key="index"
        class="w-full max-w-5xl mx-auto flex flex-col gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-yellow-500/10 hover:shadow-yellow-500/60 mb-10"
      >
        <!-- content -->
        <h1 class="text-xl sm:text-lg font-bold text-yellow-400">{{ skillCategory.category }}</h1>
        <div
          class="flex-col grid lg:grid-cols-2 md:grid-cols-2 xl:col-end-2 sm:grid-cols-1 gap-4 mt-2"
        >
          <div
            v-for="(skill, index) in skillCategory.skills"
            :key="index"
            class="w-full flex items-center gap-4 p-4 rounded-xl text-yellow-500 border border-yellow-500 shadow-md hover:bg-yellow-500 hover:text-white transition-all duration-300 cursor-pointer group h-16 hover:scale-110"
          >
            <div
              class="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg overflow-hidden"
            >
              <img
                :src="skill.photo"
                :alt="skill.name"
                class="10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div class="flex flex-col">
              <span class="font-semibold lg:text-sm sm:text-[1vw]">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Educational Background Section  -->
    <div class="w-full hidden lg:flex xl:flex items-center gap-3 my-5 px-10 md:px-4">
      <!-- Educational Background Title lg screen -->
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Educational Background
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>

    <div
      v-for="(education, index) in Education"
      :key="index"
      class="w-full px-10 hidden lg:flex xl:flex justify-start items-center my-5"
    >
      <div class="grid grid-cols-[auto_1fr] gap-10 w-full">
        <!-- Smaller Vertical Title (Leftmost) -->
        <div
          class="flex flex-col items-center justify-center bg-linear-to-b from-yellow-600 via-yellow-500 to-yellow-300 rounded-2xl w-12 py-4 shadow-md shadow-yellow-500/30"
        >
          <div v-for="(letter, letterIndex) in education.type" :key="letterIndex">
            <span class="text-white font-bold text-lg"> {{ letter }}</span>
          </div>
        </div>

        <!-- Content Card -->
        <div class="flex justify-center">
          <div
            class="w-full flex items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
          >
            <!-- Image -->
            <div class="w-50 h-50 shrink-0">
              <img
                :src="education.photo"
                alt="URS Logo"
                class="w-full h-full object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
              />
            </div>

            <!-- Text -->
            <div class="text-white text-justify">
              <!-- NEW: Education Header -->
              <div class="mb-4">
                <h2 class="text-xl sm:text-2xl font-bold text-yellow-400">
                  {{ education.institution }}
                </h2>
                <p class="text-gray-300 font-medium">
                  {{ education.degree }}
                </p>
                <p class="text-gray-400 text-sm">
                  {{ education.year }}
                </p>
              </div>

              <!-- Description -->
              <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                {{ education.description_1 }}
              </p>
              <br />
              <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
                {{ education.description_2 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Educational Background for sm Screen -->
    <!-- Educational Background Title sm screen -->
    <div class="w-full my-5 lg:hidden mt-2 flex items-center gap-3 px-4">
      <h4
        class="text-xl sm:text-3xl italic bg-linear-to-r from-yellow-600 via-yellow-500 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap"
      >
        Educational Background
      </h4>
      <div class="flex-1 h-0.5 bg-linear-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
    </div>
    <div
      v-for="(education, index) in Education"
      :key="index"
      class="flex lg:hidden justify-center lg:gap-10 xl:gap-15 md:gap-10"
    >
      <div
        class="lg:w-100 xl:w-120 max-w-5xl w-full my-[7vh] flex flex-col items-center gap-6 bg-white/5 border border-white/30 rounded-3xl p-8 shadow-lg shadow-yellow-500/40 backdrop-blur-md transition-all duration-300 ease-in-out hover:scale-[1.03] hover:bg-yellow-500/10 hover:shadow-yellow-500/60"
      >
        <!-- Image -->
        <div class="w-full h-60 md:w-fit md:h-80">
          <img
            :src="education.photo"
            :alt="education.institution + ' Logo'"
            class="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>

        <!-- NEW: Education Header -->
        <div class="text-center text-white">
          <h2 class="text-lg sm:text-xl font-bold text-yellow-400">
            {{ education.institution }}
          </h2>
          <p class="text-gray-300 text-sm sm:text-base font-medium">
            {{ education.degree }}
          </p>
          <p class="text-gray-400 text-xs sm:text-sm">
            {{ education.year }}
          </p>

          <!-- Optional divider -->
          <div class="w-30 h-0.5 bg-yellow-400 mx-auto mt-2 rounded-full"></div>
        </div>

        <!-- Description -->
        <div class="text-white text-justify flex flex-col h-full">
          <div class="flex flex-col justify-center flex-1">
            <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
              {{ education.description_1 }}
            </p>
            <br />
            <p class="text-gray-300 indent-8 leading-relaxed sm:text-[2vh] text-[1.8vh]">
              {{ education.description_2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Seminars -->
  </div>
</template>
