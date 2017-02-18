<template>
  <div class="pagination is-centered">
    <a class="pagination-previous" 
      @click="$emit('prev')"
      :disabled="current === 0">
      <span class="icon is-small"><i class="fa fa-chevron-left"></i></span> Previous
    </a>
    <a class="pagination-next"
        @click="$emit('next')"
        :disabled="current === pages.length - 1">
      Next <span class="icon is-small"><i class="fa fa-chevron-right"></i></span>
    </a>
    <ul class="pagination-list">
      <li v-for="page in pages" @click="$emit('setPage', page)">
        <a :class="[ current === page ? 'pagination-link is-current' : 'pagination-link'] ">
          {{ page + 1 }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'paginator',
  props: [ 'current', 'next', 'pages', 'prev', 'setPage' ]
}
</script>

<style scoped>
a.pagination-next,
a.pagination-previous,
a.pagination-link {
  color: #363636;
  transition: all .25s ease;
}
a.pagination-link.is-current {
  background-color: #7b7b7b;
  border-color: #7b7b7b;
  color: white;
}
.pagination-previous .icon {
  margin-right: 10px !important;
}
.pagination-next .icon {
  margin-left: 10px !important;
}
</style>
