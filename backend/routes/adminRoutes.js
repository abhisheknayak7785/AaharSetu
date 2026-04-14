const { Router } = require('express');
const adminController = require('../controllers/adminController');
const { requireAuth, requireAdmin } = require('../middleware/authMiddleware');

const router = Router();

router.use(requireAuth, requireAdmin);

router.get('/shops', adminController.getAllShops);
router.post('/shops', adminController.createShop);
router.get('/analytics', adminController.getAnalytics);
router.get('/complaints', adminController.getComplaints);
router.put('/complaint/:id', adminController.updateComplaint);
router.get('/users', adminController.getAllUsers);

module.exports = router;
