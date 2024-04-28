import { Track } from "react-native-track-player";

export const playlist: Track[] = [
    {
        id: 1,
        url: require("./assets/songs/Sing_My_Pleasure.mp3"),
        title: "Sing My Pleasure",
        artist: "Vivy (Vo. Kairi Yagi)",
        album: "Sing My Pleasure EP",
        artwork: "https://static.wikia.nocookie.net/vivy-fluorite-eyes-song6914/images/a/a9/Sing_My_Pleasure_Jacket_Cover.png/revision/latest?cb=20210513005914",
    },
    {
        id: 2,
        url: require("./assets/songs/Daisy.mp3"),
        title: "Daisy",
        artist: "Kyo Hanabasami",
        album:"Petrichor",
        artwork: "https://i.scdn.co/image/ab67616d0000b2734eb866ddf66d26dfff68a2fa",
    },
    {
        id: 3,
        url: require("./assets/songs/Stars_we_Chase.mp3"),
        title: "Stars we Chase",
        artist: "Mia Taylor (CV: Shu Uchida)",
        album: "Eutopia/EMOTION/stars we chase",
        artwork: "https://static.wikia.nocookie.net/love-live/images/a/a5/Stars_we_chase.jpg/revision/latest?cb=20220528133445",
    },
    {
        id: 4,
        url: require("./assets/songs/Eutopia.mp3"),
        title: "Eutopia",
        artist: "Lanzhu Zhong (CV: Akina Homoto)",
        album: "Eutopia/EMOTION/stars we chase",
        artwork: "https://static.wikia.nocookie.net/love-live/images/5/5c/Eutopia.jpg/revision/latest?cb=20220528133431",
    },
    {
        id: 5,
        url: require("./assets/songs/Guitar_Loneliness_and_Blue_Planet.mp3"),
        title: "Guitar, Loneliness and Blue Planet",
        artist: "Kessoku Band",
        album: "Guitar, Loneliness and Blue Planet",
        artwork: "https://images.genius.com/3b89eb518b906ad0ae95033d450f2b36.300x300x1.png",
    },
]