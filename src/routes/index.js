const express = require ('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html', {title: 'AC Código'});
        });
    
router.get('/contact', (req, res) => {
 res.render('contact.html', {title: 'AC Contacto'});
  });
    module.exports = router;