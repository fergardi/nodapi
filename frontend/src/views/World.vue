<template lang="pug">
  #World
    .map-container
      #map
</template>

<script>
  import api from '../services/api.js'
  import notification from '../services/notification'
  import constants from '../config/constants'
  import moment from 'moment'
  import VueSocketio from 'vue-socket.io'
  import Vue from 'vue'
  export default {
    name: 'World',
    data () {
      return {
        map: null,
        current: {},
        options: {
          zoom: 15,
          pitch: 45,
          center: [0, 0],
          token: 'pk.eyJ1IjoiZmVyZ2FyZGkiLCJhIjoiY2lxdWl1enJiMDAzaWh4bTNwY3F6MnNwdiJ9.fPkJoOfrARPtZWCj1ehyCQ',
          style: 'mapbox://styles/fergardi/civamajjq003t2imgv46s299o',
          //style: 'mapbox://styles/fergardi/cirymo82r004jgym6lh1lkgo5',
          position: 'bottom-left',
          range: 1000,
          speed: 1,
          curve: 1,
          interactive: true
        },
        avatar: null,
        markers: []
      }
    },
    mounted () {
      self = this;
      this.createMap();
      api.getLocations((locations) => {
        this.drawLocations(locations);
      });
      setInterval(this.geoLocate(), 5000);
    },
    sockets:{
      connect (){
        //console.info('Socket connected, waiting for new data...');
      },
      updateLocations (location) {
        this.addLocation(location);
      }
    },
    methods: {
      createMap () {
        mapboxgl.accessToken = this.options.token;
        this.map = new mapboxgl.Map({
          container: 'map',
          center: this.options.center,
          style: this.options.style,
          pitch: this.options.pitch,
          zoom: this.options.zoom,
          interactive: this.options.interactive,
          attributionControl: { position: this.position }
        });
        this.map.on('dblclick', (e) => {
          this.updatePosition(e.lngLat);
        });
        //this.map.boxZoom.disable();
        //this.map.dragPan.disable();
        this.map.doubleClickZoom.disable();
        //this.map.scrollZoom.disable();
        this.map.keyboard.disable();
        //this.map.touchZoomRotate.disable();
      },
      geoLocate () {
        navigator.geolocation.getCurrentPosition((position) => {
          this.updatePosition(new mapboxgl.LngLat(position.coords.longitude, position.coords.latitude));
        });
      },
      move (position) {
        this.map.jumpTo({
          center: position,
          speed: this.options.speed,
          curve: this.options.curve,
          zoom: this.options.zoom
        });
      },
      updatePosition (position) {
        if (this.avatar === null) {
          var marker = document.createElement('div');
          marker.className = 'map-position';
          var icon = document.createElement('img');
          icon.src = 'dist/img/player/avatar.png';
          icon.className = 'map-avatar animated infinite bounce';
          marker.appendChild(icon);
          var shadow = document.createElement('div');
          shadow.className = 'map-avatar-shadow';
          marker.appendChild(shadow);
          this.avatar = new mapboxgl.Marker(marker, { offset: [-30, -77] }).setLngLat(position).addTo(this.map);
        } else {
          this.avatar.setLngLat(position);
        }
        this.move(position);
      },
      drawLocations (locations) {
        for (var i = 0; i < locations.length; i++) {
          this.addLocation(locations[i]);
        }
      },
      addLocation (location) {
        var marker = document.createElement('div');
        marker.className = 'text-center map-location animated fadeIn';
        marker.id = location.id;
        var expiration = document.createElement('span');
        expiration.className = 'map-expiration label label-success';
        var expired = false;
        $(expiration).countdown(moment(location.createdAt).add(constants.expiration + Math.floor(Math.random() * 10), 'seconds').toDate(), function(event) {
          $(this).html(event.strftime('%M:%S'));
          if (event.offset.totalSeconds <= constants.expiration && expired) {
            self.removeLocation(location);
          } else if (event.offset.totalSeconds <= constants.expiration / 16 && !expired) {
            expired = true;
          } else if (event.offset.totalSeconds <= constants.expiration / 8 && $(this).hasClass('label-warning')) {
            $(this).removeClass('label-warning').addClass('label-danger');
          } else if (event.offset.totalSeconds <= constants.expiration / 4 && $(this).hasClass('label-success')) {
            $(this).removeClass('label-success').addClass('label-warning');
          }
        });
        marker.addEventListener('click', (e) => {
          e.preventDefault();
          if (this.close(location) && !expired) {
            switch(location.image){
              case 'city':
                this.$router.push({ name: 'city' });
                break;
              case 'forge':
                this.$router.push({ name: 'forge' });
                break;
              case 'inn':
                this.$router.push({ name: 'inn' });
                break;
              case 'market':
                this.$router.push({ name: 'market' });
                break;
              case 'dungeon':
              case 'tower':
              case 'mine':
              case 'ruins':
              case 'castle':
                this.$router.push({ name: 'location', params: { locationId: location.id }});
                break;
            }  
          } else {
            notification.danger(Vue.t('alert.map.closed'));
          }
        });
        marker.appendChild(expiration);
        var icon = new Image();
        marker.appendChild(icon);
        icon.className = 'map-icon animated';
        icon.onload = () => {
          this.markers.push(new mapboxgl.Marker(marker, { id: location.id, offset: [-icon.naturalWidth/2, -icon.naturalHeight] }).setLngLat([location.lng, location.lat]).addTo(this.map));
        };
        icon.src = 'dist/img/locations/' + location.image + '.png';
      },
      removeLocation (location) {
        var found = this.markers.find(l => parseInt(l._element.id) === parseInt(location.id))
        if (found) {
          found.remove();
          this.markers.splice(this.markers.indexOf(found), 1);
        }
      },
      close (position) {
        //console.log('The distance between ',this.avatar.getLngLat(),' and ',position,' is ',this.distance(this.avatar.getLngLat(), position));
        return this.distance(this.avatar.getLngLat(), position) <= this.options.range;
      },
      distance (point1, point2) {
        var lat1 = point1.lat;
        var lng1 = point1.lng;
        var lat2 = point2.lat;
        var lng2 = point2.lng;
        var R = 6371000;
        var x1 = lat2 - lat1;
        var dLat = this.toRad(x1);
        var x2 = lng2 - lng1;
        var dLon = this.toRad(x2);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var dist = R * c;
        return dist;
      },
      toRad (deg) {
        return deg * Math.PI / 180;
      },    
      toDeg (rad) {
        return rad * 180 / Math.PI;
      }
    }
  }
</script>

<style lang="stylus">
  #map
    -webkit-user-select: none;
    width: 100%;
    height: 100%;
    min-height: 100%;
  .mapboxgl-canvas
    height: 100% !important;
  .map-location
    opacity: 0.90;
  .map-icon
    cursor: pointer;
    display: block;
    z-index: 10;
  .map-icon:hover
    -webkit-animation: tada 1s;
    animation: tada 1s;
  .map-expiration
    margin-bottom: 5px;
    z-index: 20;
  .map-position
    z-index: 50;
  .map-avatar
    width: 60px;
    height: 60px;
    border-radius: 50%;
  .map-avatar-shadow
    width: 20px;
    height: 7px;
    border-radius: 50%;
    background-color: black;
    opacity: .3;
    margin: 10px auto 0 auto;
</style>