(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    showFaces();
    $('#people').on('mouseover', '.bio', showText);
    $('#people').on('mouseout', '.bio', hideText);
  }

  function showFaces(){
    $.ajax({
      url: '/people/bios',
      type: 'get',
      data: null,
      dataType: 'html',
      success: people=>{
        $('#people').append(people);
      }
    });
  }

  function showText(e){
    var text = $(this).children('.bioText');
    text.removeClass('hidden');
    e.stopPropagation();
  }

  function hideText(e){
    var text = $(this).children('.bioText');
    text.addClass('hidden');
    e.stopPropagation();
  }


})();
