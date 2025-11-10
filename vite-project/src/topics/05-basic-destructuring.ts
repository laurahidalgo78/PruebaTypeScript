interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Pepito',
        year: 2015
    }
}

const song = 'New song';

//const { song: anotherSong, songDuration:duration } = audioPlayer;
//const {author: author} = audioPlayer.details;

//console.log('Song: ', song);
//console.log('Duration: ', duration);
//console.log('Author: ', author);

const [p1, p2, trunks]: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.log('Personaje 3:', trunks);

export{}