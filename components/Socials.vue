<template>
  <ul class="flex justify-center">
    <li v-for="account in accounts" :key="`footer-social-${account.name}`">
      <a class="social-media-item" :href="account.url">
        <Icon :name="account.name.toLowerCase()" />
        <span class="social-media-label">{{ account.name }}</span>
      </a>
    </li>
  </ul>
</template>
<script>
import Icon from './Icon'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      accounts: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/harps116',
        },
        {
          name: 'GitHub',
          url: 'https://www.github.com/harps116',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.social-media-item {
  @apply flex flex-col justify-center items-center;
  @apply mb-3 mr-4;
  width: 30px;
  height: 30px;
}
.social-media-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
