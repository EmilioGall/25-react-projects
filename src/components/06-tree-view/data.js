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
      parts: [
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

];

export default sideMenu;