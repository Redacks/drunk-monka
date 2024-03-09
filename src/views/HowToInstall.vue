<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import LinkIcon from "~icons/mingcute/external-link-line";
</script>
<template>
  <div class="flex flex-1 flex-col text-center font-madimiOne text-customWhite">
    <h2 class="mb-6 text-4xl">Installieren</h2>
    <span>
      Manchmal zeigt der Browser direkt beim öffnen an, dass die App installiert werden kann!
    </span>
    <span class="mt-4"> Ansonsten kannst du unten die Anleitung finden! </span>
    <div class="mt-10 flex w-full">
      <div class="flex flex-1 flex-col gap-6">
        <h2 class="text-2xl">IOS</h2>
        <a
          href="https://support.google.com/chrome/answer/9658361?hl=de&co=GENIE.Platform%3DiOS&oco=1"
          class="mx-auto"
        >
          <CustomButton text="Chrome" color="green"><LinkIcon class="mr-2" /></CustomButton>
        </a>
        <a href="https://www.youtube.com/watch?v=AwfKUpq5seE" class="mx-auto">
          <CustomButton text="Safari" color="green"><LinkIcon class="mr-2" /></CustomButton>
        </a>
      </div>
      <div class="flex flex-1 flex-col gap-6">
        <h2 class="text-2xl">Android</h2>
        <a
          href="https://support.google.com/chrome/answer/9658361?hl=de&co=GENIE.Platform%3DAndroid&oco=1"
          class="mx-auto"
        >
          <CustomButton text="Chrome" color="green"><LinkIcon class="mr-2" /></CustomButton>
        </a>
        <a href="https://mzl.la/3p7ltJx" class="mx-auto">
          <CustomButton text="Firefox" color="green"><LinkIcon class="mr-2" /></CustomButton>
        </a>
        <a
          href="https://developer.samsung.com/automation/progressive-web-app.html#How-to-install"
          class="mx-auto"
        >
          <CustomButton text="Samsung Internet" color="green">
            <LinkIcon class="mr-2" />
          </CustomButton>
        </a>
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <div class="my-6 mt-auto flex flex-col gap-6 pt-6">
        <RouterLink to="/" class="mx-auto">
          <CustomButton text="Zurück" color="transparent" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>
