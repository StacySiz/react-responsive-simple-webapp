import React from "react";
import './Footer.css'
import {Button} from "./Button";

export default function Footer() {
  return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join adventure newsletter, please subscribe
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe any time.
          </p>
          <div className='input-areas'>
            <form>
              <input className='footer-input' type='email' placeholder='email'/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
      </div>
  )
}
