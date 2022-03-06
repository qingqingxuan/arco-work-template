<template>
  <a-space direction="vertical" class="w-full">
    <a-card size="small">
      <div class="text-lg">
        <span> 当前版本号：{{ version }} </span>
      </div>
    </a-card>

    <a-card :body-style="{ padding: '10px' }">
      <a-descriptions bordered :column="3" title="构建依赖" :data="dependenciesList" />
    </a-card>
    <a-card :body-style="{ padding: '10px' }">
      <a-descriptions bordered :column="3" title="开发依赖" :data="devDependenciesList" />
    </a-card>
  </a-space>
</template>

<script lang="ts" setup>
  import useAppInfo from '@/hooks/useAppInfo'
  import { ref } from 'vue'
  const { version, dependencies, devDependencies } = useAppInfo()
  const dependenciesList = ref<Record<string, string>[]>([])
  const devDependenciesList = ref<Record<string, string>[]>([])

  const depValues = Object.values(dependencies)
  dependenciesList.value = Object.keys(dependencies).map((it, index) => {
    return {
      label: it,
      value: depValues[index],
    }
  })
  const devDepValues = Object.values(devDependencies)
  devDependenciesList.value = Object.keys(devDependencies).map((it, index) => {
    return {
      label: it,
      value: devDepValues[index],
    }
  })
</script>
