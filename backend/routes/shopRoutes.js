const { Router } = require('express');
const shopController = require('../controllers/shopController');
const { requireAuth, requireShopkeeper } = require('../middleware/authMiddleware');

const router = Router();

// Protect routes
router.use(requireAuth, requireShopkeeper);

// Ensure the shopkeeper has a registered shop first
router.post('/initialize', shopController.initializeShop);
router.get('/my-shop', shopController.getMyShop);
router.put('/stock', shopController.updateStock);
router.post('/distribute', shopController.distributeRation);
router.get('/assigned-beneficiaries', shopController.getAssignedBeneficiaries);

module.exports = router;
