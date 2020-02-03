const axios = require('axios');

const router = require('express').Router();

router.get('/', (req, res) => {
    const candidates = [
        {
            id: 0,
            handle: "@BernieSanders",
            name: "Bernie Sanders",
            picture_url: "https://pbs.twimg.com/profile_images/1097820307388334080/9ddg5F6v_400x400.png"
        },
        {
            id: 1,
            handle: "@realDonaldTrump",
            name: "Donald J. Trump",
            picture_url: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"
        },
        {
            id: 2,
            handle: "@JoeBiden",
            name: "Joe Biden",
            picture_url: "https://pbs.twimg.com/profile_images/1223955397008068614/6j51JwXU_400x400.jpg"
        },
    ]

    const placeholderGameData = {
        rounds: [
            {
                id: 1,
                tweet: {
                    text: "Heading to Davos, Switzerland, to meet with World and Business Leaders and bring Good Policy and additional Hundreds of Billions of Dollars back to the United States of America! We are now NUMBER ONE in the Universe, by FAR!!",
                    reply_count: "22.4K",
                    retweet_count: "10.8K",
                    like_count: "115.5K",
                    date: "20 Jan 2020"
                },
                options: [
                    candidates[2],
                    candidates[1],
                    candidates[0],
                ],
                correct_option_id: 1,
            },
            {
                id: 2,
                tweet: {
                    text: "My first executive orders will be to reverse every single thing President Trump has done to demonize and harm immigrants, including his racist and disgusting Muslim ban.",
                    reply_count: "10.5K",
                    retweet_count: "18.3K",
                    like_count: "131.3K",
                    date: "27 Jan 2020"
                },
                options: [
                    candidates[1],
                    candidates[2],
                    candidates[0],
                ],
                correct_option_id: 0,
            },
            {
                id: 3,
                tweet: {
                    text: "Let’s remember one thing when it comes to impeachment: Donald Trump is on trial because he’s afraid to run against me. He knows I’ll beat him this November.",
                    reply_count: "19.8K",
                    retweet_count: "7.3K",
                    like_count: "40K",
                    date: "28 Jan 2020"
                },
                options: [
                    candidates[0],
                    candidates[2],
                    candidates[1],
                ],
                correct_option_id: 2,
            },
        ],
    }

    res.status(200).json(placeholderGameData);

//   const requestOptions = {
//     headers: { accept: 'application/json' },
//   };

//   axios
//     .get('https://icanhazdadjoke.com/search', requestOptions)
//     .then(response => {
//       res.status(200).json(response.data.results);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Error Fetching Jokes', error: err });
//     });
});

module.exports = router;
