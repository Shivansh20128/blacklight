import pool from './index.js';

const getData = {
    leaderboard: async (req, res) => { 
        try{
            const [rows] = await pool.query("SELECT Name, Score, Country, Timestamp FROM mydata WHERE YEARWEEK(Timestamp, 1) = YEARWEEK(NOW(), 1) ORDER BY Score DESC LIMIT 200;");
            res.json({
                data : rows
            });
        }
        catch(err){
            console.log(err);
            res.json({
                status : "error",
            });
        }
    },
    lastWeekLeaderboard: async (req, res) => {
        try{
            const {Country} = req.params.Country;
            const [rows] = await pool.query(`SELECT Name, Score, Country, Timestamp FROM mydata WHERE Country = ? AND YEARWEEK(Timestamp, 1) = YEARWEEK(NOW() - INTERVAL 1 WEEK, 1) ORDER BY Score DESC LIMIT 200;`, [Country])
            res.json({
                data : rows
            });
        }
        catch(err){
            console.log(err);
            res.json({
                status : "error",
            });
        }
    },
    rank: async (req, res) => {
        try{
            const {UID} = req.params.UID;
            const [rows] = await pool.query(`SELECT UID, Name, Score, Country, Timestamp, RANK() OVER (ORDER BY Score DESC) AS UserRank FROM mydata WHERE UID = ?;`, [UID]);
            res.json({
                data : rows[0]
            });
        }
        catch(err){
            console.log(err);
            res.json({
                status : "error",
            });
        }
    }
}

export default getData;