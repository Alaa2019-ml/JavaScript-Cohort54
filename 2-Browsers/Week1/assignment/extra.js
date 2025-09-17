function replaceLogo() {
  const logo = document.querySelector(
    'img[alt="Google"], img[src*="googlelogo"]'
  );
  if (!logo) return;
  logo.src = chrome.runtime.getURL('images.png'); // uses packaged image
  logo.removeAttribute('srcset');
  logo.alt = 'HackYourFuture';
}

// run once
replaceLogo();

// reapply if the page updates the logo later
const obs = new MutationObserver(() => replaceLogo());
obs.observe(document.documentElement, { childList: true, subtree: true });
