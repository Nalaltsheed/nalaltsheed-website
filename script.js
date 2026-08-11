(function(){
  const modals = document.querySelectorAll('.modal');
  const openers = document.querySelectorAll('[data-modal]');

  function openModal(id){
    const modal = document.getElementById(id);
    if(!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    const close = modal.querySelector('.modal-close');
    if(close) setTimeout(()=>close.focus(),40);
  }
  function closeModal(id){
    const modal = document.getElementById(id);
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    if(!document.querySelector('.modal.open')) document.body.classList.remove('modal-open');
  }

  openers.forEach(el=>el.addEventListener('click',()=>openModal(el.dataset.modal)));
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>closeModal(el.dataset.close)));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      const active=document.querySelector('.modal.open');
      if(active) closeModal(active.id);
    }
  });

  // Keep nested profile navigation usable: clicking an item inside the profile modal
  // closes the profile modal and opens the selected content modal.
  document.querySelectorAll('#profileModal [data-modal]').forEach(el=>{
    el.addEventListener('click',()=>{
      const target=el.dataset.modal;
      closeModal('profileModal');
      setTimeout(()=>openModal(target),120);
    });
  });
})();
