import express from 'express';
import query  from './queries.js';

const router = express.Router();

router.get("/country/:Country", query.getCountryLeaderboard);
router.get("/uid/:UID", query.getRank);
router.get("/", query.getLeaderboard);

export default router;