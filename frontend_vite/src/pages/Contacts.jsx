import { useState, useEffect } from 'react'
import axios from 'axios'
import './Contacts.css'

function Contacts() {
  const [contactInfo, setContactInfo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/community/contacts')
        setContactInfo(response.data)
      } catch (error) {
        console.error('Error fetching contacts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContacts()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="contacts-page">
      <h2>Contact Us</h2>
      <p className="contacts-intro">
        Get in touch with the Dalarnia.fun team. We'd love to hear from you!
      </p>

      <div className="contact-methods">
        <div className="contact-card card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>{contactInfo?.email || 'contact@dalarnia.fun'}</p>
          <a href={`mailto:${contactInfo?.email || 'contact@dalarnia.fun'}`} className="btn">
            Send Email
          </a>
        </div>

        <div className="contact-card card">
          <div className="contact-icon">💬</div>
          <h3>Discord</h3>
          <p>{contactInfo?.discord || 'dalarnia-legends'}</p>
          <button className="btn">Join Discord</button>
        </div>

        <div className="contact-card card">
          <div className="contact-icon">🐦</div>
          <h3>Twitter</h3>
          <p>{contactInfo?.social_media?.twitter || '@DalarniaLegends'}</p>
          <button className="btn">Follow Us</button>
        </div>

        <div className="contact-card card">
          <div className="contact-icon">📘</div>
          <h3>Facebook</h3>
          <p>{contactInfo?.social_media?.facebook || 'DalarniaLegends'}</p>
          <button className="btn">Visit Page</button>
        </div>
      </div>

      <div className="contact-form-section card">
        <h3>Send us a Message</h3>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="input-field" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="input-field" placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" className="input-field" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="textarea-field" rows="6" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacts

