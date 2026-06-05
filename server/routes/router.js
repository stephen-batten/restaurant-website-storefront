const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
require('dotenv/config')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.post('/contact', async(req, res) => {
    const {action, firstName, lastName, email, feedback} = req.body


    switch(action) {
        case "send":
            try {
                 
                // -----> Email Domain Validation <-----
                const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(ca|com)$/
                if (!emailRegex.test(email)) {
                    return res.status(400).send("Email must include an '@', and end with .ca or .com")
                }
                
                // -----> Contact Form Submission <-----
                const contactData = {
                    firstName: firstName, 
                    lastName: lastName, 
                    email: email, 
                    feedback: feedback
                }

                const newContact = new Contact(contactData)
                const saveContact = await newContact.save()
                
                if (saveContact) {
                    res.send('Feedback sent. Thank you.')
                } else {
                    res.send('Failed to submit feedback. Please try again.')
                }

            } catch (err) {
                console.error('Error saving feedback:', err)
                res.status(500).send('Server error while submitting feedback.')
            }
            break;

        default:
            res.status(400).send('Invalid Request')
            break;
    }

})


// -----> Stripe Payment Session <-----
router.post('/create-checkout-session', async (req, res) => {
    const priceId = req.body.priceId

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancelled`,
    })

    res.redirect(303, session.url)
})

module.exports = router