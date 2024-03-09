<script setup lang="ts">
import CustomLinkButton from "@/components/CustomButton.vue";
import PlayIcon from "virtual:icons/mingcute/play-fill";
import EditTaskIcon from "virtual:icons/mingcute/edit-2-fill";
import EditPlayerIcon from "virtual:icons/mingcute/user-edit-fill";
import { onMounted, ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import DownloadIcon from "~icons/mingcute/download-line";

const showInstallButton = ref(false);
let installPrompt: BeforeInstallPromptEvent | null = null;
onMounted(() => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event as BeforeInstallPromptEvent;
    showInstallButton.value = true;
  });
});

const installPWA = () => {
  if (!installPrompt) return;
  installPrompt.prompt();
};
</script>
<template>
  <div class="mt-2 flex flex-1 flex-col gap-6">
    <RouterLink to="/play" class="mx-auto">
      <CustomLinkButton text="Spiel starten" color="green">
        <PlayIcon class="mr-2" />
      </CustomLinkButton>
    </RouterLink>
    <RouterLink to="/tasks" class="mx-auto">
      <CustomLinkButton text="Aufgaben bearbeiten" color="gray">
        <EditTaskIcon class="mr-2" />
      </CustomLinkButton>
    </RouterLink>
    <RouterLink to="/players" class="mx-auto">
      <CustomLinkButton text="Spieler bearbeiten" color="gray">
        <EditPlayerIcon class="mr-2" />
      </CustomLinkButton>
    </RouterLink>
  </div>
  <button class="mx-auto mb-8" @click="installPWA">
    <CustomButton text="Download" color="green">
      <DownloadIcon class="mr-2" />
    </CustomButton>
  </button>
</template>
