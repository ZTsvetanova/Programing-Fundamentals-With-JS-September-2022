function gramophone(bandName, albumName, songName){

    let timeToAlbum = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(timeToAlbum/2.5);
    console.log(`The plate was rotated ${rotations} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')