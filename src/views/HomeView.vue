<script setup lang="ts">
import CustomLinkButton from "@/components/CustomButton.vue";
import PlayIcon from "virtual:icons/mingcute/play-fill";
import EditTaskIcon from "virtual:icons/mingcute/edit-2-fill";
import EditPlayerIcon from "virtual:icons/mingcute/user-edit-fill";
import { onMounted, ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import DownloadIcon from "~icons/mingcute/download-line";

const showInstallButton = ref(false);
onMounted(() => {
  // Check if the app is running in standalone mode (PWA)
  showInstallButton.value = window.matchMedia("(display-mode: standalone)").matches;
});

const installPWA = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        if (!registration.active) {
          throw new Error("Service Worker not active");
        }

        // Check if the beforeinstallprompt event is supported
        if ("onbeforeinstallprompt" in window) {
          // Listen for the beforeinstallprompt event
          window.addEventListener("beforeinstallprompt", (event) => {
            // Prevent the default behavior of the event
            event.preventDefault();

            // Show the install prompt to the user
            const installPrompt = event as any; // TypeScript workaround
            installPrompt.prompt();

            // Wait for the user to respond to the prompt
            installPrompt.userChoice.then((choiceResult: any) => {
              if (choiceResult.outcome === "accepted") {
                console.log("User accepted the PWA installation");
              } else {
                console.log("User dismissed the PWA installation");
              }
            });
          });
        } else {
          console.warn("beforeinstallprompt event not supported");
        }
      })
      .catch((error) => {
        console.error("Error during PWA installation:", error);
      });
  }
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
