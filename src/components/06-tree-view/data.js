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

];

export default sideMenu;