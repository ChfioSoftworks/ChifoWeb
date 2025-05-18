// Animationen und Modalfunktionen
document.addEventListener('DOMContentLoaded', function() {
    // Kauf-Button Event Listener
    const buyButtons = document.querySelectorAll('.buy-button:not(.disabled)');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Animation beim Klicken
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Konsolen-Logs für "Professionelles" Aussehen
    console.log('%cChifo Softworks - System initialisiert', 'color: #9d50bb; font-weight: bold;');
    console.log('%c© 2025 Alle Rechte vorbehalten', 'color: #666;');
});

// Modal Funktionen
function openPurchaseModal(productName) {
    const modal = document.getElementById('purchaseModal');
    const modalTitle = document.getElementById('modalTitle');
    
    modalTitle.textContent = `${productName} kaufen`;
    modal.style.display = 'block';
    
    // Reset Form
    document.getElementById('purchaseForm').reset();
    
    // Preis basierend auf Produkt setzen
    const priceDisplay = document.querySelector('.price-display');
    if (productName === 'Chifo Raid') {
        priceDisplay.textContent = '24,99 €';
    }
}

function showTerms() {
    document.getElementById('termsModal').style.display = 'block';
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Kaufformular "Absenden"
document.getElementById('purchaseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validierung
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (!email || !phone) {
        alert('Bitte füllen Sie alle Felder aus!');
        return;
    }
    
    // Hier würde normalerweise die Zahlung verarbeitet werden
    alert('Kauf erfolgreich verarbeitet! Sie erhalten in Kürze eine Bestätigungs-E-Mail. Falls diese Daten nicht stimmen bekommen sie keine Nachricht!');
    closeModal();
    
    // Fake-Konsolenlog
    console.log('%cZahlung erfolgreich verarbeitet für Chifo Raid', 'color: #4CAF50;');
    console.log(`%cBestätigung gesendet an: ${email}`, 'color: #4CAF50;');
});

// Schließen des Modals beim Klicken außerhalb
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});