import { Gradient } from './Gradient.js';

const gradient = new Gradient();

gradient.initGradient('#gradient-canvas');

document.addEventListener('DOMContentLoaded', function() {
    const joinWaitlistBtn = document.getElementById('join-waitlist-btn');
    const mainJoinWaitlistBtn = document.getElementById('main-join-waitlist-btn');
    const tallyOverlay = document.getElementById('tally-overlay');
    const tallyModal = document.getElementById('tally-modal');
    const tallyIframe = document.querySelector('#tally-modal iframe')
    const closeTallyBtn = document.getElementById('close-tally-btn')

    if (joinWaitlistBtn) {
      joinWaitlistBtn.addEventListener('click', openTallyForm);
    } else {
      console.error('Element with ID "join-waitlist-btn" not found');
    }
  
    if (mainJoinWaitlistBtn) {
      mainJoinWaitlistBtn.addEventListener('click', openTallyForm);
    } else {
      console.error('Element with ID "main-join-waitlist-btn" not found');
    }
  
    if (tallyOverlay) {
      tallyOverlay.addEventListener('click', closeTallyForm);
    } else {
      console.error('Element with ID "tally-overlay" not found');
    }

    if (closeTallyBtn) {
      closeTallyBtn.addEventListener('click', closeTallyForm); 
    } else {
      console.error('Element with ID "close-tally-btn" not found');
    }
  
    function openTallyForm() {
      document.getElementById('tally-overlay').style.display = 'block';
      document.getElementById('tally-modal').style.display = 'block';
      tallyIframe.classList.remove('hidden');
      setTimeout(() => { 
        tallyOverlay.style.opacity = '1'; 
        tallyModal.style.opacity = '1'; 
        tallyModal.style.transform = 'translate(-50%, -50%) scale(1)'; 
      }, 10);
    }
  
    function closeTallyForm() {
      tallyOverlay.style.opacity = '0'; 
      tallyModal.style.opacity = '0'; 
      tallyModal.style.transform = 'translate(-50%, -50%) scale(0.95)'; 
      setTimeout(() => { 
        tallyOverlay.style.display = 'none'; 
        tallyModal.style.display = 'none'; 
        tallyIframe.classList.add('hidden')
      }, 500);
    }
  });
  
