<template lang="pug">
  .container
    #Monsters
      .row.hidden-xs
        .col-xs-12
          .page-header
            h1 {{ 'title.monsters' | i18n }} | 
              small {{ 'subtitle.monsters' | i18n }}
      .row#title
        .col-xs-12
          form.form-horizontal.form-group
            .input-group
              .input-group-addon
                i.fa.fa-search
              input(v-model='filter', type='search', class='form-control', v-bind:placeholder="$t('placeholder.monsters')")
      .row
        .col-xs-12.animated.fadeIn(v-if='!filtered.length')
          .well.well-sm.text-center
            i.fa.fa-fw.fa-lg.fa-exclamation-triangle
            | {{ 'title.none' | i18n }}
        transition-group(tag='div', enter-active-class='animated fadeIn')
          .col-xs-3(v-for='monster in filtered', v-bind:key='monster.id')
            .panel.text-center(v-bind:class='"panel-" + monster.class')
              .panel-heading
                .panel-title
                  i.ra.ra-fw.ra-lg(v-bind:class='"ra-" + monster.icon')
                  span {{ monster.name | i18n }}
              .panel-body
                img.thumbnail.img-responsive(v-bind:src='"dist/img/monsters/" + monster.image + ".png"', v-bind:class='"panel-" + monster.class')
                .progress
                  .progress-bar.progress-bar-warning(v-bind:style='"width: " + monster.strength * 10 + "%"')
                .progress
                  .progress-bar.progress-bar-primary(v-bind:style='"width: " + monster.intelligence * 10 + "%"')
                .progress
                  .progress-bar.progress-bar-danger(v-bind:style='"width: " + monster.vitality * 10 + "%"')
                .progress
                  .progress-bar.progress-bar-success(v-bind:style='"width: " + monster.agility * 10 + "%"')
                .progress
                  .progress-bar.progress-bar-info(v-bind:style='"width: " + monster.defense * 10 + "%"')
</template>

<script>
  import api from '../services/api'
  import Vue from 'vue'
  export default {
    name: 'Monsters',
    data () { 
      return {
        filter: '',
        monsters: []
      }
    },
    created () {
      api.getMonsters((monsters) => {
        this.monsters = monsters;
      });
    },
    computed: {
      filtered () {
        return this.monsters.filter((monster) => {
          return Vue.t(monster.name).toLowerCase().indexOf(this.filter.toLowerCase()) !== -1;
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>