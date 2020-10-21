<!-- Layout -->
<template>
  <div>
    <header />
    <slot>
    <a href="https://github.com/maczamora" target="_blank" rel="noopener"><font-awesome :icon="['fab', 'github']"/></a>
    <a href="https://twitter.com/Mario_Zamora_Co" target="_blank" rel="noopener"><font-awesome :icon="['fab', 'twitter']" width="10"/></a>
    </slot> <!-- Page content will be inserted here -->
    <footer />
  </div>
</template>
