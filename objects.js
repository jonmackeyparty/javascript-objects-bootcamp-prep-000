var playlist = { ['Slowdive']: 'Alison', ['My Bloody Valentine']: 'Sometimes'};

function updatePlaylist(playlist, artistName, songTitle){
  artistName = ['Phil Ochs'];
  songTitle = 'Here/s to the State of Mississippi';
  return Object.assign ({}, playlist, {artistName: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  return 
}