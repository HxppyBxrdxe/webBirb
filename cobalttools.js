document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    let isReady = false;
    setTimeout(() => {
        isReady = true;
    }, 8000);

    const overlay = document.createElement('div');
    overlay.id = 'dark-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '-12000px';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 1s ease';
    overlay.style.zIndex = '-1';
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.id = 'copy-popup';
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '-12000px';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'var(--base-color)';
    popup.style.border = '2px solid var(--primary-color)';
    popup.style.padding = '30px';
    popup.style.borderRadius = '12px';
    popup.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.6)';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.2s ease';
    popup.style.zIndex = '9999';
    document.body.appendChild(popup);

    const smileImg = document.createElement('img');
    smileImg.src = 'https://raw.githubusercontent.com/HxppyBxrdxe/webBirb/refs/heads/main/img/WebP/AzunaLoading.webp';
    smileImg.alt = 'Smile!';
    smileImg.style.width = '100px';
    smileImg.style.height = '100px';
    smileImg.style.objectFit = 'contain';

    const errorImg = document.createElement('img');
    errorImg.src = 'https://raw.githubusercontent.com/HxppyBxrdxe/webBirb/refs/heads/main/img/WebP/shaking-head-no-no.webp';
    errorImg.alt = 'Error';
    errorImg.style.width = '100px';
    errorImg.style.height = '100px';
    errorImg.style.objectFit = 'contain';
    errorImg.style.display = 'none';

    popup.appendChild(smileImg);
    popup.appendChild(errorImg);

    const textContainer = document.createElement('div');
    textContainer.style.marginTop = '20px';
    const textElement = document.createElement('p');
    textElement.id = 'searchText';
    textElement.style.fontSize = '19px';
    textElement.style.color = 'var(--text-color)';
    textElement.style.textAlign = 'center';
    textElement.style.width = '100%';
    textContainer.appendChild(textElement);

    const secondLine = document.createElement('p');
    secondLine.id = 'secondLine';
    secondLine.style.fontSize = '14px';
    secondLine.style.color = 'var(--text-color)';
    secondLine.style.textAlign = 'center';
    secondLine.style.width = '100%';    
    textContainer.appendChild(secondLine);

    popup.appendChild(textContainer);

    const urlPattern = /^(https?:\/\/)/i;

    function showPopup() {
        overlay.style.left = '0';
        overlay.style.opacity = '1';
        overlay.style.zIndex = '9998';
        popup.style.left = '50%';
        popup.style.opacity = '1';
    }

    function hidePopup() {
        overlay.style.opacity = '0';
        popup.style.opacity = '0';
        setTimeout(() => {
            overlay.style.left = '-12000px';
            overlay.style.zIndex = '-1';
            popup.style.left = '-12000px';
        }, 0);
    }

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const query = searchInput.value.trim();

        if (!isReady) {
            textElement.textContent = 'cloudflare turnstile is still checking if you\'re not a bot. if it takes too long, you can try: disabling weird browser extensions, changing networks, using a different browser, or checking your device for malware.';
            secondLine.textContent = '(Not really)';
            smileImg.style.display = 'none';
            errorImg.style.display = 'block';
            showPopup();

            setTimeout(() => {
                hidePopup();
            }, 5000);
            return;
        }

        if (query === '') {
            textElement.textContent = 'No URL entered.';
            secondLine.textContent = 'Please enter a URL to continue.';
            smileImg.style.display = 'none';
            errorImg.style.display = 'block';
            showPopup();

            setTimeout(() => {
                hidePopup();
            }, 2000);

        } else if (urlPattern.test(query)) {
            navigator.clipboard.writeText(query)
                .then(() => {
                    textElement.textContent = `You searched for: ${query}`;
                    secondLine.textContent = 'Redirecting you to cobalt.tools. Your link has been copied again, just paste it back into cobalt.';
                    smileImg.style.display = 'block';
                    errorImg.style.display = 'none';
                    showPopup();

                    setTimeout(() => {
                        hidePopup();
                        setTimeout(() => {
                            window.open('https://cobalt.tools/', '_blank');
                        }, 100);
                    }, 2000);

                })
                .catch(err => {
                    console.error('Clipboard copy failed:', err);
                    textElement.textContent = 'Clipboard copy failed.';
                    secondLine.textContent = 'Please try again later.';
                    smileImg.style.display = 'none';
                    errorImg.style.display = 'block';
                    showPopup();

                    setTimeout(() => {
                        hidePopup();
                        setTimeout(() => {
                            window.open('https://cobalt.tools/', '_blank');
                        }, 100);
                    }, 2000);
                });

        } else {
            textElement.textContent = 'Invalid link. Please enter a valid URL.';
            secondLine.textContent = 'Make sure the URL starts with "https://".';
            smileImg.style.display = 'none';
            errorImg.style.display = 'block';
            showPopup();

            setTimeout(() => {
                hidePopup();
            }, 2000);
        }
    });
});
