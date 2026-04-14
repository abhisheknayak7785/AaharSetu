const { Router } = require('express');
const beneficiaryController = require('../controllers/beneficiaryController');
const { requireAuth, requireRole } = require('../middleware/authMiddleware');

const router = Router();

// Protect all beneficiary routes
router.use(requireAuth, requireRole(['beneficiary']));

router.get('/eligibility', beneficiaryController.getEligibility);
router.get('/shop-stock', beneficiaryController.getShopStock);
router.get('/transactions', beneficiaryController.getTransactions);
router.post('/complaint', beneficiaryController.postComplaint);

module.exports = router;
