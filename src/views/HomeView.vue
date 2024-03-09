<script setup lang="ts">
import CustomLinkButton from "@/components/CustomButton.vue";
import PlayIcon from "virtual:icons/mingcute/play-fill";
import EditTaskIcon from "virtual:icons/mingcute/edit-2-fill";
import EditPlayerIcon from "virtual:icons/mingcute/user-edit-fill";
import { onMounted, ref } from "vue";
import CustomButton from "@/components/CustomButton.vue";
import DownloadIcon from "~icons/mingcute/download-line";
import UAParser from "ua-parser-js";

let parser = new UAParser(navigator.userAgent);
let parserResults = parser.getResult();

let showInstallButton = !window.matchMedia("(display-mode: standalone)").matches;
let installDocumentation = ref("");

if (parserResults.os.name == "iOS") {
  installDocumentation.value =
    "https://aureatelabs.com/blog/install-pwa-to-device/#how-to-install-pwa-on-ios-devices";
} else if (parserResults.os.name == "Android") {
  installDocumentation.value =
    "https://aureatelabs.com/blog/install-pwa-to-device/#how-to-add-pwa-to-android-devices";
} else {
  installDocumentation.value =
    "https://aureatelabs.com/blog/install-pwa-to-device/#can-pwa-be-installed-on-the-desktop";
}
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
  <a
    class="mx-auto mb-8"
    v-if="showInstallButton && installDocumentation != ''"
    :href="installDocumentation"
    target="_blank"
  >
    <CustomButton text="Download" color="green">
      <DownloadIcon class="mr-2" />
    </CustomButton>
  </a>
</template>
