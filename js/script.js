import { Gradient } from './Gradient.js';

const gradient = new Gradient();

gradient.initGradient('#gradient-canvas');

document.addEventListener('DOMContentLoaded', function() {
    const joinWaitlistBtn = document.getElementById('join-waitlist-btn');
    const mainJoinWaitlistBtn = document.getElementById('main-join-waitlist-btn');
    const typeformOverlay = document.getElementById('typeform-overlay');
    const typeformModal = document.getElementById('typeform-modal');
  
    if (joinWaitlistBtn) {
      joinWaitlistBtn.addEventListener('click', openTypeform);
    } else {
      console.error('Element with ID "join-waitlist-btn" not found');
    }
  
    if (mainJoinWaitlistBtn) {
      mainJoinWaitlistBtn.addEventListener('click', openTypeform);
    } else {
      console.error('Element with ID "main-join-waitlist-btn" not found');
    }
  
    if (typeformOverlay) {
      typeformOverlay.addEventListener('click', closeTypeform);
    } else {
      console.error('Element with ID "typeform-overlay" not found');
    }
  
    function openTypeform() {
      document.getElementById('typeform-overlay').style.display = 'block';
      document.getElementById('typeform-modal').style.display = 'block';
      setTimeout(() => { 
        typeformOverlay.style.opacity = '1'; 
        typeformModal.style.opacity = '1'; 
        typeformModal.style.transform = 'translate(-50%, -50%) scale(1)'; 
      }, 10);
    }
  
    function closeTypeform() {
      typeformOverlay.style.opacity = '0'; 
      typeformModal.style.opacity = '0'; 
      typeformModal.style.transform = 'translate(-50%, -50%) scale(0.95)'; 
      setTimeout(() => { 
        typeformOverlay.style.display = 'none'; 
        typeformModal.style.display = 'none'; 
      }, 500);
    }
  });
  
