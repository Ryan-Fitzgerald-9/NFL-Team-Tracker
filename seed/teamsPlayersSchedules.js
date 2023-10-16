const db = require('../db/index')
const Team = require('../models/team')
const Player = require('../models/player')
const Schedule = require('../models/schedule')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const teamPatriots = await new Team({
        team_name: "New England Patriots",
        logo: "assets/patslogo.png",
        stadium_loc: "Foxborough, Massachusetts",
        capacity: 65878,
        })
        teamPatriots.save()

        console.log("Created team!")

    const schedulePatriots = await new Schedule({
        team: teamPatriots._id,
        games: [
            {
                week: 1,
                date: '2023-09-10',
                opponent: 'Philadelphia Eagles',
                location: 'Home',
                result: 'Loss',
                score: '25-20'
            },
            {
                week: 2,
                date: '2023-09-17',
                opponent: 'Miami Dolphins',
                location: 'Home',
                result: 'Loss',
                score: '24-17'
            },
            {
                week: 3,
                date: '2023-09-24',
                opponent: 'New York Jets',
                location: 'Away',
                result: 'Win',
                score: '15-10'
            },
            {
                week: 4,
                date: '2023-10-01',
                opponent: 'Dallas Cowboys',
                location: 'Away',
                result: 'Loss',
                score: '38-3'
            },
            {
                week: 5,
                date: '2023-10-08',
                opponent: 'New Orleans Saints',
                location: 'Home',
                result: 'Loss',
                score: '34-0'
            },
            {
                week: 6,
                date: '2023-10-15',
                opponent: 'Las Vegas Raiders',
                location: 'Away',
                result: 'Loss',
                score: '21-17'
            },
            {
                week: 7,
                date: '2023-10-22',
                opponent: 'Buffalo Bills',
                location: 'Home',
                result: '1:00 PM',
                score: 'CBS'
            },
            {
                week: 8,
                date: '2023-10-29',
                opponent: 'Miami Dolphins',
                location: 'Away',
                result: '1:00 PM',
                score: 'CBS'
            },
            {
                week: 9,
                date: '2023-11-05',
                opponent: 'Washington Commanders',
                location: 'Home',
                result: '1:00 PM',
                score: 'FOX'
            },
            {
                week: 10,
                date: '2023-11-12',
                opponent: 'Indianapolis Colts',
                location: 'Home',
                result: '9:30 AM',
                score: 'NFL NET'
            },
            {
                week: 11,
                date: " ",
                opponent: 'BYE WEEK',
                location: " ",
                result: " ",
                score: " "
            },
            {
                week: 12,
                date: '2023-11-26',
                opponent: 'New York Giants',
                location: 'Away',
                result: '1:00 PM',
                score: 'FOX'
            },
            {
                week: 13,
                date: '2023-12-03',
                opponent: 'Los Angeles Chargers',
                location: 'Home',
                result: '1:00 PM',
                score: 'CBS'
            },
            {
                week: 14,
                date: '2023-12-07',
                opponent: 'Pittsburgh Steelers',
                location: 'Away',
                result: '8:15 PM',
                score: 'PRIME'
            },
            {
                week: 15,
                date: '2023-12-18',
                opponent: 'Kansas City Chiefs',
                location: 'Home',
                result: '8:15 PM',
                score: 'ABC/ESPN'
            },
            {
                week: 16,
                date: '2023-12-24',
                opponent: 'Denver Broncos',
                location: 'Away',
                result: '8:15 PM',
                score: 'NFL NET'
            },
            {
                week: 17,
                date: '2023-12-31',
                opponent: 'Buffalo Bills',
                location: 'Away',
                result: '1:00 PM',
                score: 'CBS'
            },
            {
                week: 18,
                date: '2024-01-07',
                opponent: 'New York Jets',
                location: 'Home',
                result: '1:00 PM',
                score: 'CBS'
            }
        ]
        })
        schedulePatriots.save()

        console.log("Created schedule!")
        
    const players = [
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241464.png&w=350&h=254',
            name: 'Mac Jones',
            position: 'QB',
            depth_chart_pos: 1,
            number: 10,
            age: 25,
            height: "6'3",
            weight: 220,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Alabama'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4240069.png&w=350&h=254',
            name: 'Malik Cunningham',
            position: 'QB',
            depth_chart_pos: 2,
            number: 16,
            age: 25,
            height: "6'1",
            weight: 198,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Louisville'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569173.png&w=350&h=254',
            name: 'Rhamondre Stevenson',
            position: 'RB',
            depth_chart_pos: 1,
            number: 38,
            age: 25,
            height: "6'0",
            weight: 227,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Oklahoma'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3051392.png&w=350&h=254',
            name: 'Ezekiel Elliott',
            position: 'RB',
            depth_chart_pos: 2,
            number: 15,
            age: 28,
            height: "6'0",
            weight: 225,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'OSU'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2577134.png&w=350&h=254',
            name: 'Ty Montgomery II',
            position: 'RB',
            depth_chart_pos: 3,
            number: 14,
            age: 30,
            height: "6'0",
            weight: 220,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Stanford'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2576623.png&w=350&h=254',
            name: 'DeVante Parker',
            position: 'WR',
            depth_chart_pos: 1,
            number: 1,
            age: 30,
            height: "6'3",
            weight: 215,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Louisville'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3045523.png&w=350&h=254',
            name: 'Kendrick Bourne',
            position: 'WR',
            depth_chart_pos: 2,
            number: 84,
            age: 28,
            height: "6'1",
            weight: 205,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'E Washington'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3120348.png&w=350&h=254',
            name: 'JuJu Smith-Schuster',
            position: 'WR',
            depth_chart_pos: 3,
            number: 7,
            age: 26,
            height: "6'1",
            weight: 215,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'USC'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362921.png&w=350&h=254',
            name: 'Tyquan Thornton',
            position: 'WR',
            depth_chart_pos: 4,
            number: 11,
            age: 23,
            height: "6'2",
            weight: 185,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Baylor'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241802.png&w=350&h=254',
            name: 'Jalen Reagor',
            position: 'QB',
            depth_chart_pos: 5,
            number: 83,
            age: 24,
            height: "5'11",
            weight: 197,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'TCU'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3046439.png&w=350&h=254',
            name: 'Hunter Henry',
            position: 'TE',
            depth_chart_pos: 1,
            number: 85,
            age: 28,
            height: "6'5",
            weight: 258,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Arkansas'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3116164.png&w=350&h=254',
            name: 'Mike Gesicki',
            position: 'TE',
            depth_chart_pos: 2,
            number: 88,
            age: 28,
            height: "6'6",
            weight: 245,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Penn State'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2971281.png&w=350&h=254',
            name: 'Pharaoh Brown',
            position: 'TE',
            depth_chart_pos: 3,
            number: 86,
            age: 29,
            height: "6'5",
            weight: 246,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Oregon'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3043109.png&w=350&h=254',
            name: 'Trent Brown',
            position: 'LT',
            depth_chart_pos: 1,
            number: 77,
            age: 30,
            height: "6'8",
            weight: 370,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Florida'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3123867.png&w=350&h=254',
            name: 'Calvin Anderson',
            position: 'LT',
            depth_chart_pos: 2,
            number: 76,
            age: 27,
            height: "6'5",
            weight: 305,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Texas'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4051001.png&w=350&h=254',
            name: 'Cole Strange',
            position: 'LG',
            depth_chart_pos: 1,
            number: 69,
            age: 25,
            height: "6'5",
            weight: 310,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Chattanooga'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4367202.png&w=350&h=254',
            name: 'Atonio Mafi',
            position: 'LG',
            depth_chart_pos: 2,
            number: 68,
            age: 22,
            height: "6'3",
            weight: 330,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'UCLA'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2578529.png&w=350&h=254',
            name: 'David Andrews',
            position: 'C',
            depth_chart_pos: 1,
            number: 60,
            age: 31,
            height: "6'3",
            weight: 300,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Georgia'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362732.png&w=350&h=254',
            name: 'Jake Andrews',
            position: 'C',
            depth_chart_pos: 2,
            number: 67,
            age: 23,
            height: "6'3",
            weight: 308,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Troy'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4046545.png&w=350&h=254',
            name: 'Mike Onwenu',
            position: 'RG',
            depth_chart_pos: 1,
            number: 71,
            age: 25,
            height: "6'3",
            weight: 350,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Michigan'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4244826.png&w=350&h=254',
            name: 'Sidy Sow',
            position: 'RG',
            depth_chart_pos: 2,
            number: 62,
            age: 25,
            height: "6'5",
            weight: 318,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'E Michigan'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4240554.png&w=350&h=254',
            name: 'Vederian Lowe',
            position: 'RT',
            depth_chart_pos: 1,
            number: 59,
            age: 24,
            height: "6'6",
            weight: 320,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Illinois'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14930.png&w=350&h=254',
            name: 'Riley Reiff',
            position: 'RT',
            depth_chart_pos: 2,
            number: 74,
            age: 34,
            height: "6'6",
            weight: 310,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Iowa'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11387.png&w=350&h=254',
            name: 'Matthew Slater',
            position: 'WR',
            depth_chart_pos: 6,
            number: 18,
            age: 38,
            height: "6'0",
            weight: 205,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'UCLA'
        },
        {
            image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4250360.png&w=350&h=254',
            name: 'Bailey Zappe',
            position: 'QB',
            depth_chart_pos: 3,
            number: 4,
            age: 24,
            height: "6'1",
            weight: 215,
            able_to_play: true,
            team: teamPatriots._id,
            college: 'Western KY'
        }
    ]
    await Player.insertMany(players)
    console.log('Created players')
}

const run = async () => {
    await main()
    db.close()
}

run()