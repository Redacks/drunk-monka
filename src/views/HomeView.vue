<script setup lang="ts">
import CustomLinkButton from "@/components/CustomButton.vue";
import PlayIcon from "virtual:icons/mingcute/play-fill";
import EditTaskIcon from "virtual:icons/mingcute/edit-2-fill";
import EditPlayerIcon from "virtual:icons/mingcute/user-edit-fill";
</script>
<template>
  <div class="mt-2 flex flex-col justify-center gap-6">
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
</template>
