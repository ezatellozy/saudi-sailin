<template>
  <div>
    <div class="flex flex-col justify-center items-center pb-10">
      <figure
        class="mx-auto w-full 2xs:w-10/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12 p-8 2xs:p-16"
      >
        <img
          src="@/assets/images/404.svg"
          class="w-full h-full object-contain"
          alt=""
        />
      </figure>
      <p class="text-lg md:text-2xl font-bold text-primary">
        Back To Home Page
        <span class="text-third px-2">
          <router-link to="/"> click here </router-link>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
