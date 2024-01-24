import express from 'express';
import getData  from './get.js';

const router = express.Router();

router.get("/", getData.leaderboard);
router.get("/uid/:UID", getData.rank);
router.get("/country/:Country", getData.lastWeekLeaderboard);

export default router;