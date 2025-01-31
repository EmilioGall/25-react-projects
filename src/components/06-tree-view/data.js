const sideMenu = [

   {
      number: '01',
      label: 'Accordion',
      to: '#accordion'
   },

   {
      number: '02',
      label: 'Color generator',
      to: '#random-color-generetor'
   },

   {
      number: '03',
      label: 'Star rating',
      to: '#star-rating'
   },

   {
      number: '04',
      label: 'Image Slider',
      to: '#image-slider'
   },

   {
      number: '05',
      label: 'Load-more button',
      to: '#load-more-button',
      children: [
         {
            label: 'Start',
            to: '#load-more-button',
         },
         {
            label: 'End',
            to: '#load-more-button-end',
         }
      ]
   },

   {
      number: '06',
      label: 'Tree view',
      to: '#tree-view'
   },

   {
      number: '07',
      label: 'QR Code Generator',
      to: '#qr-code-generator'
   },

   {
      number: '08',
      label: 'Light/Dark Mode',
      to: '#light-dark-mode'
   },

   {
      number: '09',
      label: 'Scroll Indicator',
      to: '#scroll-indicator',
      visible: false,
   },

   {
      number: '10',
      label: 'Custom Tabs',
      to: '#custom-tabs'
   },

   {
      number: '11',
      label: 'Custom Modals',
      to: '#custom-modals'
   },

   {
      number: '12',
      label: 'Github Profile Finder',
      to: '#github-profile-finder'
   },

   {
      number: '13',
      label: 'Search Autocomplete',
      to: '#search-autocomplete-api'
   },

   {
      number: '14',
      label: 'Tic-tac-toe',
      to: '#tic-tac-toe'
   },

   {
      number: '15',
      label: 'Feature Flag',
      to: '#feature-flag'
   },

   {
      number: '16',
      label: 'useFetch',
      to: '#use-fetch'
   },

   {
      number: '17',
      label: 'useOnClickOutside',
      to: '#use-on-click-outside'
   },

   {
      number: '18',
      label: 'useWindowResize',
      to: '#use-window-resize'
   },

   {
      number: '19',
      label: 'Scroll Buttons',
      to: '#scroll-top-bottom',
      children: [
         {
            label: 'Start',
            to: '#scroll-top-bottom',
         },
         {
            label: 'End',
            to: '#scroll-bottom-top',
         }
      ]
   },

   {
      number: '20',
      label: 'Scroll to Section',
      to: '#scroll-to-section'
   },

];

export default sideMenu;