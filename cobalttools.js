document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

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
    popup.style.left = '50%';
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

    const smileImg = document.createElement('img');
    smileImg.src = 'https://cobalt.tools/meowbalt/smile.png';
    smileImg.alt = 'Smile!';
    smileImg.style.width = '100px';
    smileImg.style.height = '100px';
    smileImg.style.objectFit = 'contain';
 
    const errorImg = document.createElement('img');
    errorImg.src = 'https://cobalt.tools/meowbalt/error.png';
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
    textElement.textContent = ''; 
    textContainer.appendChild(textElement);

    const secondLine = document.createElement('p');
    secondLine.id = 'secondLine';
    secondLine.style.fontSize = '14px';
    secondLine.style.color = 'var(--text-color)';
    secondLine.textContent = ''; 
    textContainer.appendChild(secondLine);


    popup.appendChild(textContainer);
    document.body.appendChild(popup);

    const urlPattern = /^(https?:\/\/)/i;  // Matches 'http://' or 'https://'

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const query = searchInput.value.trim();
    
        if (query === '') {
            // Case for empty input
            textElement.textContent = 'No URL entered.';
            secondLine.textContent = 'Please enter a URL to continue.';
            smileImg.style.display = 'none'; 
            errorImg.style.display = 'block'; 
    
            overlay.style.left = '0'; 
            overlay.style.opacity = '1'; 
            overlay.style.zIndex = '9998';
    
            popup.style.opacity = '1';
    
            setTimeout(() => {
                overlay.style.opacity = '0'; 
                popup.style.opacity = '0';
    
                setTimeout(() => {
                    overlay.style.left = '-12000px'; 
                    overlay.style.zIndex = '-1'; 
                }, 0);
            }, 2000);
        } else if (urlPattern.test(query)) {
            // Case for valid URL
            navigator.clipboard.writeText(query)
                .then(() => {
                    textElement.textContent = `You searched for: ${query}`;
                    secondLine.textContent = 'Redirecting you to cobalt.tools. Your link has been copied again, just paste it back into cobalt.'; 
    
                    overlay.style.left = '0';  
                    overlay.style.opacity = '1'; 
                    overlay.style.zIndex = '9998';
    
                    popup.style.opacity = '1';
    
                    setTimeout(() => {
                        overlay.style.opacity = '0'; 
                        popup.style.opacity = '0';
    
                        setTimeout(() => {
                            window.open('https://cobalt.tools/', '_blank'); 
                        }, 100);
    
                        overlay.style.left = '-12000px'; 
                        overlay.style.zIndex = '-1'; 
                    }, 2000);
                })
                .catch(err => {
                    console.error('Clipboard copy failed:', err);
                    textElement.textContent = 'Clipboard copy failed.';
                    secondLine.textContent = 'Please try again later.';
    
                    overlay.style.left = '0'; 
                    overlay.style.opacity = '1'; 
                    overlay.style.zIndex = '9998'; 
                    popup.style.opacity = '1'; 
    
                    setTimeout(() => {
                        overlay.style.opacity = '0';
                        popup.style.opacity = '0';
    
                        setTimeout(() => {
                            window.open('https://cobalt.tools/', '_blank'); 
                        }, 100);
    
                        overlay.style.left = '-12000px';
                        overlay.style.zIndex = '-1'; 
                    }, 2000);
                });
        } else {
            // Case for invalid URL
            textElement.textContent = 'Invalid link. Please enter a valid URL.';
            secondLine.textContent = 'Make sure the URL starts with "https://".'; 
            smileImg.style.display = 'none'; 
            errorImg.style.display = 'block'; 
    
            overlay.style.left = '0'; 
            overlay.style.opacity = '1'; 
            overlay.style.zIndex = '9998';
    
            popup.style.opacity = '1';
    
            setTimeout(() => {
                overlay.style.opacity = '0';
                popup.style.opacity = '0';
    
                setTimeout(() => {
                    overlay.style.left = '-12000px'; 
                    overlay.style.zIndex = '-1';
                }, 0);
            }, 2000);
        }
    });
})    