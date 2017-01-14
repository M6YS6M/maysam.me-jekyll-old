$('.type-it').typeIt({
     //speed: 900,
     lifeLike: false,
     autoStart: false
})
.tiType('maysam is trying to learn,')
.tiSettings({speed: 220})
.tiType('but now ...')
.tiDelete(11)
.tiType('but instead ...!');
