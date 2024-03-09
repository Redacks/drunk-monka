<script setup lang="ts">
import CustomLinkButton from "@/components/CustomButton.vue";
</script>
<template>
  <div class="mt-2 flex flex-col justify-center gap-6">
    <RouterLink to="/play" class="mx-auto">
      <CustomLinkButton text="Spiel starten" icon="mingcute:play-fill" color="green" />
    </RouterLink>
    <RouterLink to="/tasks" class="mx-auto">
      <CustomLinkButton text="Aufgaben bearbeiten" icon="mingcute:edit-2-fill" color="gray" />
    </RouterLink>
    <RouterLink to="/players" class="mx-auto">
      <CustomLinkButton text="Spieler bearbeiten" icon="mingcute:user-edit-fill" color="gray" />
    </RouterLink>
  </div>
</template>
